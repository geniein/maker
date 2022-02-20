import EditorProcess from '@components/EditorProcess'
import EditorMain from '@pages/EditorMain'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, Switch, useLocation } from 'react-router'

const Editorspace =() => {
    const location = useLocation<any>();
    const orderId = location.state?.orderId || '202202210003ORDER35106';
    const contentId = location.state?.contentId || 'proto';
    const isMobile = useMediaQuery({query:"(max-width: 576px)"});    
    const [editorStep, setEditorStep] = useState('first');
    
    return (
        <div>
            <EditorProcess editorStep={editorStep}></EditorProcess>
            <EditorMain editorStep={editorStep} orderId={orderId} contentId={contentId} setEditorStep={setEditorStep}></EditorMain>         
        </div>
    )
}

export default Editorspace
