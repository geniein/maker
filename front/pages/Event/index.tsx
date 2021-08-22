import axios from 'axios';
import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router'
import { EventItem, EventItemList, EventMenu, EventTop, EventWrap } from './styles'

const Event =()=>{
    // const location = useLocation<any>();
    
    // const [eventClick, setEventClick] = useState('');
    // const [currPage, setCurrPage] = useState('ALL');
    
    // if(location?.state !== undefined){         
    //     setCurrPage(location.state.currPage);
    //     delete location.state;
    // }

    const history = useHistory();    
    const [eventList, setEventList] = useState<any>(undefined);
    useEffect(()=>{
        axios.get(`/api/notices/event`).then((res)=>{            
            setEventList(res.data);
        })
    },[]);

    const onClickEventList = useCallback((id:number) => {
        history.push({
            pathname: `/workspace/customservice`,
            state: {
                currPage: 'EVENT',
                event: id                             
            }
        })
    },[]);

    if(eventList == undefined) return(<div>Processing</div>)
    return (
        <div>
        <EventWrap>
            <EventTop>
                <div className='title_wrap'>
                    <p className='evnet_title'>이벤트 <span>| 커넥터에서는 항상 특별한 이벤트가 진행중입니다.</span></p>
                </div>
            </EventTop>
            <EventMenu>
                <ul>
                    <li>
                        진행중인 이벤트
                    </li>
                    <li>
                        종료된 이벤트
                    </li>
                </ul>
            </EventMenu>
            <EventItemList>
                <EventItem>
                    <div className='event_img'>
                        box
                    </div> 
                    <div className='event_text'>
                        <span className='onOff'>진행중</span>
                        <div className='event_sub1'>메이커서비스 할인 이벤트!</div>
                        <div className='event_sub2'>makerservice sale event</div>
                        <div className='event_period'> 2021-04-09 ~ 당사일정</div>
                        <div className='event_info'>주문부터 제작까지 스마트하게, 언제 어디서나 간편하게!</div>
                        <div className='event_btn'>View</div>
                    </div>                   
                </EventItem>
                {eventList.map((val:any,idx:number)=>{
                    return(<EventItem key={idx}>
                        <div className='event_img' onClick={()=>onClickEventList(val.id)}>
                            <img src={val.thumbnail}></img>
                        </div> 
                        <div className='event_text'>
                            <span className='onOff'>진행중</span>
                            <div className='event_sub1'>{val.title}</div>
                            <div className='event_sub2'>makerservice sale event</div>
                            <div className='event_period'> 2021-04-09 ~ 당사일정</div>
                            <div className='event_info'>{val.content}</div>
                            <div className='event_btn' onClick={()=>onClickEventList(val.id)}>View</div>
                        </div>                   
                    </EventItem>)
                })}
            </EventItemList>
            <div style={{height:'50px'}}/>
        </EventWrap>
        </div>
    )
}


{/* <Link to={{
                            pathname: `/workspace/customservice`,
                            state: {
                                currPage: 'NOTICE',
                                notice: idx                            
                            }
                        }}  */}

export default Event
