import { Paging, ReviewWrap, TableWrap } from './styles'
import React from 'react'

const Review = () =>{
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
                    <tr>
                        <th>후기</th>
                        <th>새로운 세상</th>
                        <th>뉴월드</th>
                        <th>5/5</th>
                        <th>2021.07.28</th>
                    </tr>
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
