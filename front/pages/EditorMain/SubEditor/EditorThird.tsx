import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { BottomBtn, EditorLeft, EditorRight } from '../styles'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;
}

const EditorThird:FC<Props>=({setEditorStep, orderId})=>{
    const [crop, setCrop] = useState<any>({ aspect: 16 / 9 });
    const [src, setSrc] = useState<any>('') 
    const [imageList, setImageList] = useState<any>([])

    const mock = ['/public/SAO.jpg','/public/cloud.jpg','/public/castle.jpg','/public/new.jpg','/public/uyuni.jpg']
    useEffect(() => {
        axios.post(`/api/item-orders/details`,{orderId})
        .then((res)=>{
            console.log(res);
            let rtnList = res.data || [];
            rtnList = rtnList.map((val:any, idx:number)=>`${val.filePath}${val.fileName}`)
            setImageList(rtnList);
            if(rtnList.length > 0) setSrc(rtnList[0]);
        }); 
    },[]);
    return (
        <div>
            <EditorLeft>
                <ReactCrop src={src} crop={crop} onChange={ (newCrop:any) => setCrop(newCrop)} />
            </EditorLeft>
            <EditorRight>       
                <div className='image_list'>
                    {/* {mock.map((val:any,idx:number)=>{
                        return(
                            <div key={idx} className='image_item' onClick={()=>setSrc(val)}>
                                <img src={val}/>
                            </div>
                            )
                    })}                                     */}
                    {imageList.map((val:any,idx:number)=>{
                        return(
                            <div key={idx} className='image_item' onClick={()=>setSrc(val)}>
                                <img src={val}/>
                            </div>
                            )
                    })}
                </div>
            </EditorRight>
            <BottomBtn>
                <div className='btn pre_button' onClick={()=>setEditorStep('second')}>Pre</div>
                <div className='btn post_button' onClick={()=>setEditorStep('fourth')}>Post</div>
            </BottomBtn>
        </div>
    )
}

export default EditorThird
