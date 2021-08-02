import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import React from 'react'
import { Container, CSMenu, CSTop, NoticeTable, Paging } from './styles'

const CustomService = () => {
    return (
        <div>
             <Header/>
            <TopMenu/> 
            <CSTop>
                <p>
                    고객지원 <br/>
                    CUSTOM SERVICE
                </p>
            </CSTop>
            <CSMenu>
                <ul>
                    <li>
                        공지사항                        
                    </li>
                    <li>
                        후기게시판
                    </li>
                    <li>
                        FAQ
                    </li>
                </ul>
            </CSMenu>
            <Container>
                <div className='title'>공지사항 <span>중요한 소식을 확인하세요</span></div>
                <NoticeTable>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        <tr>
                            <td>공지</td>
                            <td>Hellow World</td>
                            <td>ingenie</td>
                            <td>2021.08.01</td>
                        </tr>
                    </tbody>
                </NoticeTable>
                <Paging>
                    <li>1</li>
                    <li>2</li>
                </Paging>
            </Container>            
            <Footer/>
        </div>
    )
}

export default CustomService
