import React, {
    useState,
    useCallback,
    useEffect,
    ChangeEvent,
    useRef
} from 'react';
import  {DragDropWrap} from './styles';

interface IFileTypes {
    id: number;
    object: File;
}

const DragDrop = (): JSX.Element => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [files, setFiles] = useState<IFileTypes[]>([]);
    const fileId = useRef<number>(0);
    
    const dragRef = useRef<HTMLLabelElement | null>(null);
    
    const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement> | any): void => {
        let selectFiles: File[] = [];
        let tempFiles: IFileTypes[] = files;
        // temp 변수를 이용하여 선택했던 파일들을 담습니다.
        // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게 해줍니다.
        if (e.type === "drop") {
          // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files;
        } else {
          // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
        selectFiles = e.target.files;
        }
        for (const file of selectFiles) {
          // 스프레드 연산자를 이용하여 기존에 있던 파일들을 복사하고, 선택했던 파일들을 append 해줍니다.
        tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값으로 사용합니다.
              object: file // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
            }
        ];
        }
        setFiles(tempFiles);
    }, [files]);

    const handleDragIn = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    
    const handleDragOut = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        if (e.dataTransfer!.files) {
        setIsDragging(true);
        }
    }, []);
    
    const handleDrop = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
    
        onChangeFiles(e);
        setIsDragging(false);
    },[onChangeFiles]);
    
    const initDragEvents = useCallback((): void => {
        // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)
        
        if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
    
    const resetDragEvents = useCallback((): void => {
        // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)
        
        if (dragRef.current !== null) {
        dragRef.current.removeEventListener("dragenter", handleDragIn);
        dragRef.current.removeEventListener("dragleave", handleDragOut);
        dragRef.current.removeEventListener("dragover", handleDragOver);
        dragRef.current.removeEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const handleFilterFile = useCallback((id: number): void => {
        // 매개변수로 받은 id와 일치하지 않는지에 따라서 filter 해줍니다.
        setFiles(files.filter((file:IFileTypes) => file.id !== id));
      }, [files]);

    useEffect(() => {
        initDragEvents();
    
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);

    return (
        <div>
        <DragDropWrap>
        <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }} // label을 이용하여 구현하기에 없애줌
            multiple={true} // 파일 다중선택 허용
        />

        <label
        className={isDragging ? "File-Dragging" : "File"}
          // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이
        htmlFor="fileUpload"
        ref={dragRef}
        >
        <div>파일 첨부</div>
        </label>
        <div className="Files">
            {files.length > 0 &&
            files.map((file, idx) => {                
                const {id,object } = file;
                const preview:any = document.querySelector('#preview');
                let fileValue = '';
                const reader = new FileReader();  
                reader.onload = (() =>{
                    return (e:any)=>{console.log(e.target.result)
                        // preview.src = '123';
                        fileValue = e.target.result;
                    };
                })()
                if(object){
                    reader.readAsDataURL(object);
                }              
                return (
                <div key={id}>
                    {/* <div>{name}</div> */}
                    <img id='preview' src={fileValue}/>
                    <div
                    className="Files-Filter"
                    onClick={() => handleFilterFile(id)}
                    >
                    X
                    </div>
                </div>
                );
            })}
            </div>
        </DragDropWrap>
        
        </div>
    );
}

export default DragDrop;