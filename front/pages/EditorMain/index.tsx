import React, { Dispatch, SetStateAction } from 'react'
import { FC } from 'react'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn  } from './styles'
import EditorFirst from './SubEditor/EditorFirst'
import EditorSecond from './SubEditor/EditorSecond'
import EditorThird from './SubEditor/EditorThird'

interface Props{
    editorStep:string;
    orderId:string;
    setEditorStep: Dispatch<SetStateAction<string>>;    
}

const EditorMain:FC<Props> =({editorStep,orderId,setEditorStep}) =>{
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <EditorWrap>                
                {editorStep=='first' &&<EditorFirst setEditorStep={setEditorStep} orderId={orderId}></EditorFirst>}
                {editorStep=='second' &&<EditorSecond setEditorStep={setEditorStep} orderId={orderId}></EditorSecond>}
                {editorStep=='third' &&<EditorThird setEditorStep={setEditorStep} orderId={orderId}></EditorThird>}
            </EditorWrap> 
        </div>
    )
}

export default EditorMain
