import axios from 'axios'
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn, EditorCenterWrap, BottomBtn  } from '../styles'

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;    
}

const EditorFifth:FC<Props>=({setEditorStep, orderId})=> {

    const onClickDone = ()=>{
        const apiUrl = ``;
        const data = {
            orderId,
            approval : true
            }
        axios.post(apiUrl,data)
        .then((res)=>{
            console.log(res)
            alert('정상적으로 출력이 요청되었습니다. MyPage에서 상태를 확인하세요.');
        })
        .catch((e)=>console.log(e));
    }
    
    return (
        <div>
            <EditorCenterWrap>
                <img src='/public/reqPrint.png'/>
            </EditorCenterWrap>           
            <BottomBtn>
                <div className='btn mid_button' onClick={onClickDone}>출력하기</div>
            </BottomBtn>           
            <BottomBtn>
                <div className='btn pre_button' onClick={()=>setEditorStep('third')}>Pre</div>                
            </BottomBtn>           
        </div>
    )
}

export default EditorFifth
