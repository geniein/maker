import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { BottomBtn, EditorLeft, EditorRight, InputSubtitles, SubtitlesList } from '../styles'
import axios from 'axios';

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;
}

const EditorFourth:FC<Props>=({setEditorStep, orderId})=>{
    const [crop, setCrop] = useState<any>({ aspect: 16 / 9 });
    const [src, setSrc] = useState<any>('/public/proto/1.png') 
    const [imageList, setImageList] = useState<any>([])    

    const mock = ['/public/SAO.jpg','/public/cloud.jpg','/public/castle.jpg','/public/new.jpg','/public/uyuni.jpg']
    useEffect(() => {
        axios.post(`/api/item-orders/details`,{orderId})
        .then((res)=>{
            console.log(res);
            let rtnList = res.data || [];
            rtnList = rtnList.map((val:any, idx:number)=>`${val.filePath}${val.fileName}`)
            setImageList(rtnList);
            if(rtnList.length > 0) setSrc(rtnList[0]);
        }); 
    },[]);

    const onClickInput = (no:number)=>{
        setSrc(`/public/proto/${no}.png`);
    }
    return (
        <div>
            <EditorLeft>
                <div className='detail_src'>
                    <img src={src}>
                    </img>
                </div>
            </EditorLeft>
            <EditorRight>                
                <div className='image_list'>
                    <SubtitlesList>자막목록</SubtitlesList>
                    <InputSubtitles onClick={()=>onClickInput(1)} placeholder='프리미엄 유통 전문점 우리집놀러와'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(2)} placeholder='부산 남구 W스퀘어'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(3)} placeholder='듣고 담고 굽고 즐기고'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(4)} placeholder='바이올푸드 X 소소린 X 휘푸드 X 팜도깨비 X 우리집놀러와'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(5)} placeholder='"부산" 커네팅의 경쟁력'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(6)} placeholder=''></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(7)} placeholder='누구나 쉽고 빠르게 완성할 수 있도록'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(8)} placeholder='우리집놀러와는 여러분 근처에 있습니다.'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(9)} placeholder='4GO 뜯고 담고 끓이고- 즐기고'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(10)} placeholder='육류, 한식, 디저트 등의 밀키트 제품을 갖춘'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(11)} placeholder='신개념 프리미엄 밀키트전문점 입니다.'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(12)} placeholder='신선하고 검증된 브랜드의 상품을'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(13)} placeholder='직접 눈으로 확인하세요.'></InputSubtitles>
                    <InputSubtitles onClick={()=>onClickInput(14)} placeholder='캠핑 연인과 함께'></InputSubtitles>                    
                </div>
            </EditorRight>
            <BottomBtn>
                <div className='btn pre_button' onClick={()=>setEditorStep('second')}>Pre</div>
                <div className='btn post_button' onClick={()=>setEditorStep('fifth')}>Post</div>
            </BottomBtn>
        </div>
    )
}

export default EditorFourth
