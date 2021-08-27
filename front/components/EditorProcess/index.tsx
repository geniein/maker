import React from 'react'
import { FC } from 'react'
import { EditorProcessItem, EditorTop } from './styles'

interface Props{
    editorStep:string;
}

const EditorProcess:FC<Props> =({editorStep}) =>{
    return (
        <div>
            <EditorTop>
                <div className='top_inner'>
                    <div className='title'>
                        Place a name of title
                    </div>
                    <ul className='process_bar'>
                        <EditorProcessItem>
                            <div className='process_item' style={ editorStep=='first' ? {backgroundColor:'#fff'}: undefined}>
                                <div className='pre'><img src={'/public/logo/step1.png'}/></div>
                                <div className='post'>STEP 1 <br/>기본정보 입력</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item' style={ editorStep=='second' ? {backgroundColor:'#fff'}: undefined}>
                                <div className='pre'><img src={'/public/logo/step2.png'}/></div>
                                <div className='post'>STEP 2 <br/>사진 불러오기</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item' style={ editorStep=='third' ? {backgroundColor:'#fff'}: undefined}>
                                <div className='pre'><img src={'/public/logo/step3.png'}/></div>
                                <div className='post'>STEP 3 <br/>장면 편집하기</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item' style={ editorStep=='forth' ? {backgroundColor:'#fff'}: undefined}>
                                <div className='pre'><img src={'/public/logo/step4.png'}/></div>
                                <div className='post'>STEP 4 <br/>자막 변경하기</div>
                            </div>
                        </EditorProcessItem>
                        <EditorProcessItem>
                            <div className='process_item' style={ editorStep=='fifth' ? {backgroundColor:'#fff'}: undefined}>
                                <div className='pre'><img src={'/public/logo/step5.png'}/></div>
                                <div className='post'>STEP 5 <br/>제작 완료!</div>
                            </div>
                        </EditorProcessItem>
                    </ul>
                </div>
            </EditorTop>            
        </div>
    )
}

export default EditorProcess
