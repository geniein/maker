import React, { Dispatch, SetStateAction } from 'react'
import { FC } from 'react'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn  } from './styles'
import EditorFirst from './SubEditor/EditorFirst'
import EditorSecond from './SubEditor/EditorSecond'
import EditorThird from './SubEditor/EditorThird'

interface Props{
    editorStep:string;
    setEditorStep: Dispatch<SetStateAction<string>>;    
}

const EditorMain:FC<Props> =({editorStep,setEditorStep}) =>{
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <EditorWrap>                
                {editorStep=='first' &&<EditorFirst setEditorStep={setEditorStep}></EditorFirst>}
                {editorStep=='second' &&<EditorSecond setEditorStep={setEditorStep}></EditorSecond>}
                {editorStep=='third' &&<EditorThird setEditorStep={setEditorStep}></EditorThird>}
            </EditorWrap> 
        </div>
    )
}

export default EditorMain
