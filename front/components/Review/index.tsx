import { Paging, ReviewWrap, TableWrap } from './styles'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useCallback } from 'react';

interface Props{
    contentId: string
}

const Review:FC<Props> = ({contentId}) =>{
    const [reviewList, setReviewList] = useState<any>(undefined);
    const [currReview, setCurrReview] = useState(9999);//reset review row
    const [currPage,setCurrPage] =useState(0);
    useEffect(()=>{
        axios.get(`/api/item-reviews/${contentId}`).then((res)=>{
            console.log(res.data);
            setReviewList(res.data);
        })
    },[])
    const onClickCurrReview = useCallback((row:number) =>{
        if(row === currReview){
            setCurrReview(9999);
        }else {
            setCurrReview(row);
        }
    },[currReview])

    if(!reviewList) return (<div>Processing</div>)

    return (
        <ReviewWrap>
            Review
            <TableWrap>
                <tbody>
                    <tr>
                        <th>cate</th>
                        <th>후기제목</th>
                        <th>작성자</th>
                        <th>평점</th>
                        <th>작성일</th>
                    </tr>
                    {reviewList?.map((val:any,idx:number)=>{
                        if(idx >= currPage*5 && idx < (currPage+1)*5) 
                        return(
                        <React.Fragment key={idx}>
                        <tr className='review_row' onClick={()=>onClickCurrReview(idx)}>
                            <th>{val.category}</th>
                            <th>{val.title}</th>
                            <th>{val.author}</th>
                            <th>rating</th>
                            <th>{val.createdAt.substring(0,10)}</th>                                                
                        </tr>
                        <tr className='review_row' style={{display: currReview === idx ? 'contents' : 'none'}}>
                           <td colSpan={5}>
                               <div className='review_content' dangerouslySetInnerHTML={{__html:val?.content}}>                                                
                               </div>
                           </td>
                        </tr>
                        </React.Fragment>                        
                        )
                    })}
                    {reviewList.length<1&&<tr className='review_row'>
                        <td colSpan={5}>
                            <div className='review_content'>                                                
                            작성된 리뷰가 없습니다.
                            </div>
                        </td>
                    </tr>
                    }
                </tbody>
            </TableWrap>
            <Paging>
                <li>&lt;</li>
                {reviewList && [...Array(Math.ceil(reviewList.length/5))].map((val:any,idx:number)=>{                    
                    return <li key={idx} onClick={()=>setCurrPage(idx)}>{idx+1}</li> 
                })}                                               
                <li>&gt;</li>
            </Paging>
        </ReviewWrap>
    )
}

export default Review
