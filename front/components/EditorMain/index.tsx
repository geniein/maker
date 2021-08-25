import React from 'react'
import {EditorWrap,EditorLeft, EditorRight  } from './styles'

const EditorMain =() =>{
    return (
        <div>
            <EditorWrap>
                <EditorLeft></EditorLeft>
                <EditorRight></EditorRight>
            </EditorWrap> 
        </div>
    )
}

export default EditorMain
