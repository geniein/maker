import VideoJS from '@components/VideoJS';
import fetcher from '@utils/fetcher';
import axios from 'axios'
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import useSWR from 'swr';
import {EditorWrap,EditorLeft, EditorRight, EditorDetailInfo, EditorBtn  } from '../styles'

interface Props{
    setEditorStep: Dispatch<SetStateAction<string>>;
    orderId: string;
    contentId: string;
}

const EditorFirst:FC<Props>=({setEditorStep, contentId})=> {

    // useEffect(()=>{
    //     const apiUrl = `/api/item-contents/one/${contentId}`
    //     axios.get(apiUrl).then((res)=>{
    //         console.log(res);
    //     })
    // })
    const {data} = useSWR(`/api/item-contents/one/${contentId}`,fetcher);
    
    if(data ===undefined) return(<div>Processing</div>); //data loading...
    
    const {category, title, content, hashTag, price,srcPath, thumbnail, discount} = data[0];
    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        poster:thumbnail,
        sources: [{
          src: srcPath,
          type: 'video/mp4'
        }]
      }
    return (
        <div>
            <EditorLeft>
                <div className='src_title'>
                    <h2>{title}</h2>
                    <p>{hashTag}</p>
                </div>                
                <div className='detail_src'>                    
                    <VideoJS options={videoJsOptions}/>                   
                </div>            
            </EditorLeft>
            <EditorRight>
                <div className='detail_title'>
                    <h2>{title}</h2>
                    <p>{hashTag}</p>
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
                    <div className='post_btn' onClick={()=>setEditorStep('second')}>
                        다음
                    </div>                    
                </EditorDetailInfo>
            </EditorRight>
        </div>
    )
}

export default EditorFirst
