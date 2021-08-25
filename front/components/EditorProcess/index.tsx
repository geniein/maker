import React from 'react'
import { EditorProcessItem, EditorTop } from './styles'

const EditorProcess =() =>{
    return (
        <div>
            <EditorTop>
                <div className='top_inner'>
                    <div className='title'>
                        Place a name of title
                    </div>
                    <ul className='process_bar'>
                        <EditorProcessItem>
                            <div className='process_item'>
                                <div className='pre'>aa</div>
                                <div className='post'>ss</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item'>
                                <div className='pre'>aa</div>
                                <div className='post'>ss</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item'>
                                <div className='pre'>aa</div>
                                <div className='post'>ss</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item'>
                                <div className='pre'>aa</div>
                                <div className='post'>ss</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item'>
                                <div className='pre'>aa</div>
                                <div className='post'>ss</div>
                            </div>
                        </EditorProcessItem>
                    </ul>
                </div>
            </EditorTop>            
        </div>
    )
}

export default EditorProcess
