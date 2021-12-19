import React from 'react'
import { EventMainItem, EventMainList, EventMainWrap } from './styles'

const EventMain =() =>{
    return (
        <EventMainWrap>
            <div>
            <h2>커넥터만의 찐 이벤트!<br/><span>SPECIAL EventMain</span></h2>
            </div>
            <EventMainList>
                <EventMainItem>
                    <div className='round-item'></div>
                    <div style={{textAlign:'center'}}>
                        <p>고급<span>아크릴 액자</span>증정</p>
                    </div>
                </EventMainItem>
                <EventMainItem>
                    <div className='round-item'></div>
                    <div style={{textAlign:'center'}}>
                        <p>초대영상<span>무료쿠폰</span>지급</p>
                    </div>
                </EventMainItem>
                <EventMainItem>
                    <div className='round-item'></div>
                    <div style={{textAlign:'center'}}>
                        <p>공동구매<span>완전할인쿠폰</span>지급</p>
                    </div>
                </EventMainItem>
                <EventMainItem>
                    <div className='round-item'></div>
                    <div style={{textAlign:'center'}}>
                        <p>스타벅스<span>기프트콘</span>증정</p>
                    </div>
                </EventMainItem>
            </EventMainList>
        </EventMainWrap>
    )
}

export default EventMain
