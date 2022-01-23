import DragDrop from '@components/DragDrop'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn, EditorCenterWrap, EditorCenter, BottomBtn  } from '../styles'

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;
}

const EditorSecond:FC<Props>=({setEditorStep, orderId})=> {
    const [imgCounter, setImgCounter] =useState(0);
    return (
        <div>        
            <EditorCenterWrap>
                <div className='center_title'>필요한 사진 수 : <span>41</span> 장 │ 불러온 사진 수 : {imgCounter}장 <div className='upload_btn'>사진업로드</div></div>                
                <EditorCenter>    
                    {/* <div className='center_main'></div> */}
                    <DragDrop setImgCount={setImgCounter} orderId={orderId}></DragDrop>
                </EditorCenter>
            </EditorCenterWrap>
            <BottomBtn>
                <div className='btn pre_button' onClick={()=>setEditorStep('first')}>Pre</div>
                <div className='btn post_button' onClick={()=>setEditorStep('third')}>Post</div>
            </BottomBtn>
        </div>
    )
}

export default EditorSecond
