import { Paging, ReviewWrap, TableWrap } from './styles'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

interface Props{
    ck: string
}

const Review:FC<Props> = ({ck}) =>{
    const [reviewList, setReviewList] = useState<any>(undefined);
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
                        return(
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
                <li>1</li>
                <li>2</li>
            </Paging>
        </ReviewWrap>
    )
}

export default Review
