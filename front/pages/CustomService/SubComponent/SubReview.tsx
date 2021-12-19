import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, useImperativeHandle, useState } from 'react'
import { useLocation } from 'react-router';
import useSWR from 'swr';
import { Container, CSMenu, CSTop, NoticeInner, NoticeTable, Paging, GoListBtn, NoticeWrap } from '../styles'
import NewPost from '@components/NewPost'
import { forwardRef } from 'react';
import { useEffect } from 'react';

interface Props{
    pageState: boolean;
}

const SubNotice = forwardRef((props, ref) => {    
    const [reviewList, setReviewList] = useState<any>(undefined);
    const [newState, setNewState] = useState(false);
    const [innerState, setInnerState] = useState(false);
    const [innerValue, setInnerValue] = useState<any>(undefined);
    const [currPage, setCurrPage] =useState(0);
    const maxRow = 5; //Max Row
    const location = useLocation<any>(); //location    
    
    // const {data:noticeList} = useSWR(`/api/notices`,fetcher);

    useEffect(()=>{
        axios.get(`/api/item-reviews`).then((res)=>{
            setReviewList(res.data);
        })
    },[]);

    const onClickReview = useCallback((reviewId:string)=>{
        axios.get(`/api/item-reviews/one/${reviewId}`).then((res)=>{
            console.log(res);
            setInnerState(true);
            setInnerValue(res.data);            
        })
    },[innerState, innerValue]);
    
    const onClickMenu = () =>{
        setNewState(false);
        setInnerState(false);
    }

    useImperativeHandle(ref, () => ({
        onClickMenu,                
      }));

    if(location?.state !== undefined){                
        onClickReview(location.state.notice);
        delete location.state;
    }

    return (
        <Container>
                <div className='title'>리뷰 <span>고객들의 소중한 리뷰</span></div>
                { !(newState || innerState) && <NoticeWrap>
                    <NoticeTable>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>                       
                            {reviewList?.map((val:any,idx:number)=>{
                                if(idx >= currPage*maxRow && idx < (currPage+1)*maxRow)
                                return(
                                <tr className='notice_row' key={idx} onClick={()=>onClickReview(val.reviewId)}>
                                    <td>리뷰</td>
                                    <td>{val.title}</td>
                                    <td>{val.author}</td>
                                    <td>{val.createdAt.substring(0,10)}</td>
                                </tr>)
                            })}
                        </tbody>
                    </NoticeTable>
                    <Paging>
                        <li>&lt;</li>
                        {reviewList && [...Array(Math.ceil(reviewList.length/maxRow))].map((val:any,idx:number)=>{                            
                            return <li key={idx} onClick={()=>setCurrPage(idx)}>{idx+1}</li> 
                        })}                                               
                        <li>&gt;</li>
                    </Paging>
                    <div style={{height:'50px'}}>                        
                    </div> 
                </NoticeWrap>
                }             
                {
                    !newState && innerState && <NoticeInner>
                        <NoticeTable>
                            <tbody>
                                <tr>
                                    <td className='notice_sub'>제목</td>
                                    <td className='notice_title'>{innerValue?.title}</td>                         
                                </tr>
                                <tr>
                                    <td className='notice_sub'>작성자</td>
                                    <td className='notice_title'>{innerValue?.author}</td>                         
                                </tr>
                            </tbody>                        
                        </NoticeTable>
                        <div className='notice_view' dangerouslySetInnerHTML={{__html:innerValue?.content}}>                            
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <GoListBtn onClick={onClickMenu}>목록</GoListBtn>
                        </div>                        
                    </NoticeInner>                    
                }                          
            </Container> 
    )
});

export default SubNotice
