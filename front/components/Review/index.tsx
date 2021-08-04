import { Paging, ReviewWrap, TableWrap } from './styles'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

interface Props{
    ck: string
}

const Review:FC<Props> = ({ck}) =>{
    const [reviewList, setReviewList] = useState<any>(undefined);
    const [currPage,setCurrPage] =useState(0);
    useEffect(()=>{
        axios.get(`/api/item-reviews/${ck}`).then((res)=>{
            console.log(res.data);
            setReviewList(res.data);
        })
    },[])
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
                        if(idx >= currPage*5 && idx < (currPage+1)*5) return(
                        <tr key={idx} className='review_row'>
                            <th>{val.category}</th>
                            <th>{val.title}</th>
                            <th>{val.author}</th>
                            <th>rating</th>
                            <th>{val.createdAt.substring(0,10)}</th>                            
                        </tr>
                        )
                    })}                   
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
