import React, { Dispatch, SetStateAction } from 'react'
import { FC } from 'react'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn  } from './styles'
import EditorFifth from './SubEditor/EditorFifth'
import EditorFirst from './SubEditor/EditorFirst'
import EditorFourth from './SubEditor/EditorFourth'
import EditorSecond from './SubEditor/EditorSecond'
import EditorThird from './SubEditor/EditorThird'

interface Props{
    editorStep:string;
    orderId:string;
    contentId:string;
    setEditorStep: Dispatch<SetStateAction<string>>;    
}

const EditorMain:FC<Props> =({editorStep,orderId,contentId,setEditorStep}) =>{
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <EditorWrap>                
                {editorStep=='first' &&<EditorFirst setEditorStep={setEditorStep} orderId={orderId} contentId={contentId}></EditorFirst>}
                {editorStep=='second' &&<EditorSecond setEditorStep={setEditorStep} orderId={orderId}></EditorSecond>}
                {editorStep=='third' &&<EditorThird setEditorStep={setEditorStep} orderId={orderId}></EditorThird>}
                {editorStep=='fourth' &&<EditorFourth setEditorStep={setEditorStep} orderId={orderId}></EditorFourth>}
                {editorStep=='fifth' &&<EditorFifth setEditorStep={setEditorStep} orderId={orderId}></EditorFifth>}
            </EditorWrap> 
        </div>
    )
}

export default EditorMain
