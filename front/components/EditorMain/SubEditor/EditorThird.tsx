import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { BottomBtn, EditorLeft, EditorRight } from '../styles'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
}

const EditorThird:FC<Props>=({setEditorStep})=>{
    const [crop, setCrop] = useState<any>({ aspect: 16 / 9 });
    const [src, setSrc] = useState<any>('/public/SAO.jpg') 

    const mock = ['/public/SAO.jpg','/public/cloud.jpg','/public/castle.jpg','/public/new.jpg','/public/uyuni.jpg']
    return (
        <div>
            <EditorLeft>
                <ReactCrop src={src} crop={crop} onChange={ (newCrop:any) => setCrop(newCrop)} />
            </EditorLeft>
            <EditorRight>       
                <div className='image_list'>
                    {mock.map((val:any,idx:number)=>{
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
