import EditorProcess from '@components/EditorProcess'
import EditorMain from '@pages/EditorMain'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, Switch, useLocation } from 'react-router'

const Editorspace =() => {
    const location = useLocation<any>();
    const orderId = location.state.orderId;
    const isMobile = useMediaQuery({query:"(max-width: 576px)"});    
    const [editorStep, setEditorStep] = useState('first');
    
    return (
        <div>
            <EditorProcess editorStep={editorStep}></EditorProcess>
            <EditorMain editorStep={editorStep} orderId={orderId} setEditorStep={setEditorStep}></EditorMain>         
        </div>
    )
}

export default Editorspace
