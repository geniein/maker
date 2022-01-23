import VideoJS from '@components/VideoJS';
import fetcher from '@utils/fetcher';
import axios from 'axios'
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import useSWR from 'swr';
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn, EditorCenterWrap, BottomBtn  } from '../styles'

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;    
}

const EditorFifth:FC<Props>=({setEditorStep, orderId})=> {
    
    return (
        <div>
            <EditorCenterWrap>
                <img src='/public/reqPrint.png'/>
            </EditorCenterWrap>           
            <BottomBtn>
                <div className='btn mid_button' onClick={()=>setEditorStep('first')}>출력하기</div>
            </BottomBtn>           
            <BottomBtn>
                <div className='btn pre_button' onClick={()=>setEditorStep('third')}>Pre</div>                
            </BottomBtn>           
        </div>
    )
}

export default EditorFifth
