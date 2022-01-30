import Footer from '@components/Footer'
import Header from '@components/Header'
import NewPost from '@components/NewPost'
import TopMenu from '@components/TopMenu'
import fetcher from '@utils/fetcher'
import axios from 'axios'
import React, { FC, useCallback, useRef, useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Container, CSMenu, CSTop, NoticeInner, NoticeTable, Paging, GoListBtn, NoticeWrap, CSWrap } from './styles'
import SubFAQ from './SubComponent/SubFAQ'
import SubNotice from './SubComponent/SubNotice'
import SubReview from './SubComponent/SubReview'
import SubEvent from './SubComponent/SubEvent'

const CustomService = () => {  
    const [currPage, setCurrPage] = useState('NOTICE');
    const [notice, setNotice] = useState(undefined);
    const [event, setEvent] = useState(undefined);
    const noticeRef = useRef<any>();
    const reviewRef = useRef<any>();
    const eventRef = useRef<any>();
    const faqRef = useRef<any>();

    const location = useLocation<any>(); //location    
    
    const onClickMenuNotice = () =>{        
        noticeRef.current?.onClickMenu();
        setCurrPage('NOTICE');
    }

    const onClickMenuReview = () =>{        
        reviewRef.current?.onClickMenu();
        setCurrPage('REVIEW');
    }
    
    const onClickMenuFAQ = () =>{                
        setCurrPage('FAQ');
    }

    const onClickMenuEvent = () =>{
        eventRef.current?.onClickMenu();                
        setCurrPage('EVENT');
    }

    useEffect(()=>{
        if(notice !== undefined){            
            noticeRef.current?.onClickNotice(notice);
            setNotice(undefined);
        }else if(event !== undefined){
            eventRef.current?.onClickEvent(event);
            setEvent(undefined);
        }
    },[currPage])

    if(location?.state !== undefined){                
        setCurrPage(location.state.currPage);        
        setNotice(location.state.notice);               
        setEvent(location.state.event);
        delete location.state;
    }


    return (
        <div>
            <CSTop>
                <p>
                    고객지원 <br/>
                    CUSTOM SERVICE
                </p>
            </CSTop>
            <CSMenu>
                    <ul>
                        <li onClick={onClickMenuNotice}>
                            공지사항                        
                        </li>
                        <li onClick={onClickMenuReview}>
                            후기게시판
                        </li>
                        {/* <li onClick={onClickMenuEvent}>
                            이벤트
                        </li> */}
                        <li onClick={onClickMenuFAQ}>
                            FAQ
                        </li>
                    </ul>
                </CSMenu>        
            <CSWrap>
                {currPage ==='NOTICE'&& <SubNotice ref={noticeRef}/> }
                {currPage ==='REVIEW'&& <SubReview ref={reviewRef}/> }
                {currPage ==='EVENT'&& <SubEvent ref={eventRef}/> }
                {currPage ==='FAQ'&& <SubFAQ ref={faqRef}/> }            
            </CSWrap>
        </div>
    )
}

export default CustomService
