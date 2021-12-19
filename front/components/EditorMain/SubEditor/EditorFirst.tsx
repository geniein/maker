import React, { Dispatch, FC, SetStateAction } from 'react'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn  } from '../styles'

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
}

const EditorFirst:FC<Props>=({setEditorStep})=> {
    return (
        <div>
            <EditorLeft>
                    <div className='src_title'>
                        <h2> 타이틀</h2>
                        <p>서브타이틀</p>
                    </div>
                </EditorLeft>
                <EditorRight>
                    <div className='detail_title'>
                        <h2> 타이틀</h2>
                        <p>서브타이틀</p>
                    </div>
                    <EditorDetailInfo>
                        <div className='detail_part'>
                            <span>신랑이름</span>
                            <input type='text'></input>
                        </div>
                        <div className='detail_part'>
                            <span>신랑이름</span>
                            <input type='text'></input>
                        </div>
                        <div className='detail_part'>
                            <span>신랑이름</span>
                            <input type='text'></input>
                        </div>
                        <div className='detail_part'>
                            <span>신랑이름</span>
                            <input type='text'></input>
                        </div>
                        <div className='detail_part' style={{width:'98%'}}>
                            <span>날짜</span>
                            <input type='text'></input>
                        </div> 
                        <div className='detail_part' style={{width:'98%'}}>
                            <span>음원업로드</span>                                                                   
                        </div>
                        <div className='detail_part'>
                            <EditorBtn>기본음원으로변경</EditorBtn>
                        </div>
                        <div className='detail_part'>
                            <EditorBtn>음원업로드</EditorBtn>
                        </div>
                        <EditorBtn onClick={()=>setEditorStep('second')}>다음</EditorBtn>
                    </EditorDetailInfo>
                </EditorRight>
        </div>
    )
}

export default EditorFirst
