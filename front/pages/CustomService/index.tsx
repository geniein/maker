import Footer from '@components/Footer'
import Header from '@components/Header'
import NewPost from '@components/NewPost'
import TopMenu from '@components/TopMenu'
import fetcher from '@utils/fetcher'
import axios from 'axios'
import React, { FC, useCallback, useState } from 'react'
import { useLocation } from 'react-router'
import useSWR from 'swr'
import { Container, CSMenu, CSTop, NoticeInner, NoticeTable, Paging, GoListBtn, NoticeWrap } from './styles'

const CustomService = () => {    
    const [newState, setNewState] = useState(false);
    const [innerState, setInnerState] = useState(false);
    const [innerValue, setInnerValue] = useState<any>(undefined);
    const [currPage, setCurrPage] =useState(0);
    
    const location = useLocation<any>(); //location    
    
    const {data:noticeList} = useSWR(`/api/notices`,fetcher);
    const onClickNotice = useCallback((id:number)=>{
        axios.get(`/api/notices/${id+1}`).then((res)=>{            
            setInnerState(true);
            setInnerValue(res.data[0]);            
        })
    },[innerState, innerValue]);
    const onClickMenuNoti = () =>{
        setNewState(false);
        setInnerState(false);
    }

    if(location?.state !== undefined){                
        onClickNotice(location.state.notice);
        delete location.state;
    }

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
                    <li onClick={onClickMenuNoti}>
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
                {!(newState || innerState) && <NoticeWrap>
                    <NoticeTable>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>                       
                            {noticeList?.map((val:any,idx:number)=>{
                                if(idx >= currPage*10 && idx < (currPage+1)*10)
                                return(
                                <tr className='notice_row' key={idx} onClick={()=>onClickNotice(idx)}>
                                    <td>공지</td>
                                    <td>{val.title}</td>
                                    <td>{val.author}</td>
                                    <td>{val.createdAt.substring(0,10)}</td>
                                </tr>)
                            })}
                        </tbody>
                    </NoticeTable>
                    <Paging>
                        <li>&lt;</li>
                        {noticeList && [...Array(Math.ceil(noticeList.length/10))].map((val:any,idx:number)=>{
                            console.log(val);
                            return <li key={idx} onClick={()=>setCurrPage(idx)}>{idx+1}</li> 
                        })}                                               
                        <li>&gt;</li>
                    </Paging>
                    <div style={{height:'50px'}}>
                        <button onClick={()=>setNewState(!newState)}>NewPost</button>
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
                                    <td className='notice_sub'>제목</td>
                                    <td className='notice_title'>{innerValue?.author}</td>                         
                                </tr>
                            </tbody>                        
                        </NoticeTable>
                        <div className='notice_view' dangerouslySetInnerHTML={{__html:innerValue?.content}}>                            
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <GoListBtn onClick={onClickMenuNoti}>목록</GoListBtn>
                        </div>                        
                    </NoticeInner>                    
                }
                {
                    newState && !innerState && <NewPost des="notices"/>
                }               

            </Container>            
            <Footer/>
        </div>
    )
}

export default CustomService
