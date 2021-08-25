import EditorMain from '@components/EditorMain'
import EditorProcess from '@components/EditorProcess'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, Switch } from 'react-router'

const Editorspace =() => {
    const isMobile = useMediaQuery({query:"(max-width: 576px)"})    
    return (
        <div>
            <EditorProcess></EditorProcess>
            <EditorMain></EditorMain>         
        </div>
    )
}

export default Editorspace
