import fileUpload from '@utils/fileUpload';
import axios from 'axios';
import React, {
    useState,
    useCallback,
    useEffect,
    ChangeEvent,
    useRef,
    FC,
    Dispatch,
    SetStateAction
} from 'react';
import  {DragDropWrap, DropThumb} from './styles';

interface IFileTypes {
    id: number;
    object: File;
}

interface Props {
    setImgCount: Dispatch<SetStateAction<number>>;
    orderId: string;
}

const DragDrop:FC<Props> = ({setImgCount, orderId}): JSX.Element => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [files, setFiles] = useState<IFileTypes[]>([]);
    const fileId = useRef<number>(0);
    const thumbRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLLabelElement>(null);
    let dragCounter = 0;
    const onChangeFiles = useCallback(async (e: ChangeEvent<HTMLInputElement> | any) => {
        let selectFiles: File[] = [];
        let tempFiles: IFileTypes[] = files;
        let fileIdx = '';
        // temp 변수를 이용하여 선택했던 파일들을 담습니다.
        // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게 해줍니다.
        if (e.type === "drop") {
            selectFiles = e.dataTransfer.files;
        } else {
            selectFiles = e.target.files;
        }
        for (const file of selectFiles) {
            fileId.current++;
            fileIdx = await uploadImages(file).then((rtn)=>rtn.data);
            updateThumbnail(fileId.current,file, fileIdx);
            tempFiles = [
                ...tempFiles,
                {
                id: fileId.current, 
                object: file
                }
            ];
        }        
        setImgCount(tempFiles.length);
        setFiles(tempFiles);               
    }, [files]);

    const handleDragIn = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter++;
        if (e.dataTransfer!.items && e.dataTransfer!.items.length > 0) {
            setIsDragging(true);
        }        
    }, []);
    
    const handleDragOut = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter--;
        if (dragCounter > 0) return
        setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        // if (e.dataTransfer!.files) {
        //     setIsDragging(true);
        // }
    }, []);
    
    const handleDrop = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        onChangeFiles(e);
        setIsDragging(false);      
    },[onChangeFiles]);
    
    const initDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
    
    const resetDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
        dragRef.current.removeEventListener("dragenter", handleDragIn);
        dragRef.current.removeEventListener("dragleave", handleDragOut);
        dragRef.current.removeEventListener("dragover", handleDragOver);
        dragRef.current.removeEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const handleFilterFile = useCallback((id: number, fileIdx:number, dropElement:any, thumbElement:any, e:any): void => {        
        e.preventDefault();
        e.stopPropagation();
        dropElement.removeChild(thumbElement);
        removeImages(fileIdx);
        setFiles(files.filter((file:IFileTypes) => file.id !== id));
        setImgCount(files.length);
    }, [files]);

    const uploadImages = async (file : File) =>{   
        let formData = new FormData();
        const fileName = `${orderId}_${file.name}`;
        const api = `api/item-orders/files`;
        formData.append("file",file,fileName);
        formData.append("orderId",orderId);
        return axios.post(`${api}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }

    const removeImages = (fileIdx:any) =>{
        console.log(fileIdx);                       
        const api = `api/item-orders/files`;                
        return axios.delete(`${api}`,{
            data:{
                orderId,
                fileIdx: fileIdx                 
            },
            withCredentials:true
        });
    }

    const updateThumbnail = (fileId:number,file:any, fileIdx: any) => {
        const dropZoneElement = dragRef.current
        if(dropZoneElement){        
            let thumbnailElement = dropZoneElement.querySelector<HTMLDivElement>(".drop-zone__thumb");
            let introElement = dropZoneElement.querySelector<HTMLSpanElement>(".drop-box-intro");
            if (introElement) {
                introElement.remove();
            }
            thumbnailElement = document.createElement("div");
            thumbnailElement.classList.add("drop-zone__thumb");
            let filterElement = document.createElement("div");
            filterElement.classList.add("Files-Filter");
            filterElement.onclick = (e) => handleFilterFile(fileId, fileIdx, dropZoneElement, thumbnailElement, e)            
            filterElement.append("X");
            thumbnailElement.setAttribute("fileId",`${fileId}`);
            thumbnailElement.appendChild(filterElement);            
            dropZoneElement.appendChild(thumbnailElement);                
            // Show thumbnail for image files
            if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if(thumbnailElement) thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
            };
            } else {
                thumbnailElement.style.backgroundImage = `null`;
            }
        }
    }
    useEffect(() => {
        initDragEvents();
        axios.post(`/api/item-orders/details`,{orderId})
            .then((res)=>{
                console.log(res);
                let rtnList = res.data || [];
                rtnList = rtnList.map((val:any, idx:number)=>`${val.filePath}${val.fileName}`)
                console.log(rtnList);
            });  
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);


    // useEffect(() => {
    //     axios.post(`/api/item-orders/details`,{orderId})
    //     .then((res)=>{
    //         console.log(res);
    //         let rtnList = res.data || [];
    //         rtnList = rtnList.map((val:any, idx:number)=>`${val.filePath}${val.fileName}`)            
    //     }); 
    // },[]);
    return (
        <div>
        <DragDropWrap>
        {/* <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }} // label을 이용하여 구현하기에 없애줌
            multiple={true}  // 파일 다중선택 허용                        
        /> */}
        <label
            className={isDragging ? "File-Dragging" : "File"}
            htmlFor="fileUpload"
            ref={dragRef}
        >
        <span className="drop-box-intro">Drop file here or click to upload</span>
        </label>
        {/* <div className="Files">
            {files.length > 0 &&
            files.map((file, idx) => {                
                const {id,object } = file;                
                const preview:any = document.querySelector('#preview');
                const reader = new FileReader();  
                reader.onload = (() =>{
                    return (e:any)=>{
                        document.querySelector(`#preview_${id}`)?.setAttribute('src',e.target.result);
                    };
                })()
                if(object){
                    reader.readAsDataURL(object);
                }              
                return (
                <div key={id}>
                    <img id={`preview_${id}`} width='150px' height='150px'/>
                    <div
                    className="Files-Filter"
                    onClick={() => handleFilterFile(id)}
                    >
                    X
                    </div>
                </div>
                );
            })}
            </div> */}
        </DragDropWrap>
        
        </div>
    );
}

export default DragDrop;