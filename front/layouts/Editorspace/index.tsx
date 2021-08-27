import EditorMain from '@components/EditorMain'
import EditorProcess from '@components/EditorProcess'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, Switch } from 'react-router'

const Editorspace =() => {
    const isMobile = useMediaQuery({query:"(max-width: 576px)"});
    const [editorStep, setEditorStep] = useState('first');
    return (
        <div>
            <EditorProcess editorStep={editorStep}></EditorProcess>
            <EditorMain editorStep={editorStep} setEditorStep={setEditorStep}></EditorMain>         
        </div>
    )
}

export default Editorspace
