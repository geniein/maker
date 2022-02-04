import React from 'react'
import { FooterWrap, FooterContainer, FooterBot, FooterMid, FooterTop } from './styles'

const Footer = () => {
    return (
        <FooterWrap>
            <FooterContainer>
                <FooterTop>            
                    <li className='footer_top_l'> 
                        <p className='footer_title'>
                            (주)커네팅(Connec-thinK) <br/>
                            <span className='font'>대표 : 이승민</span>
                        </p>
                        <p className='cs_title'>
                            CS CENTER <br/>
                            울산 중구 학성로 95-6 <br/>울산중구청 청년디딤터 4층 401호
                        </p>
                        <p className='cs_number'>
                            Tel : 1566-1635
                        </p>
                    </li>
                    <li className='footer_top_r'>
                        {/* <p className='cs_title'>
                            CS CENTER
                        </p>
                        <p className='cs_number'>
                            Tel : 010-0000-0000
                        </p> */}
                        <p className='time'>
                            <span style={{
                                marginRight: '45px',
                                display: 'inline'
                            }}>평일</span>
                            AM 10:30 - PM 07:00</p>
                        <p className='lunch'>
                            <span style={{
                                marginRight: '22px',
                                display: 'inline'
                            }}>점심시간</span>
                            PM 12:00 - PM 01:00</p>
                        <p className='holiday'>주말(토,일) 및 공휴일은 휴무입니다.</p>
                    </li>
                    <li className='footer_top_c'>
                        <ul className='sns_wrap'>
                            <li>
                                <img src='/public/footer/sns_f.png'/>
                            </li>
                            <li>
                                <img src='/public/footer/sns_i.png'/>
                            </li>
                            <li>
                                <img src='/public/footer/sns_b.png'/>
                            </li>
                        </ul>
                        {/* <ul className='btn_wrap'>
                            <li>
                                자유선언
                            </li>
                            <li>
                                토요일
                            </li>
                        </ul> */}
                    </li>
                </FooterTop>                     
                {/* <FooterMid> 
                    <li>
                        MAKER
                    </li>
                    <li>/</li>
                    <li>
                        makes
                    </li>
                    <li>/</li>
                    <li>
                        BETTER
                    </li>
                    <li>/</li>
                    <li>
                        LIFE
                    </li>
                </FooterMid>                      */}
                <FooterBot>
                    <li> COPYRIGHT()
                    </li>
                    <li>(주)커네팅</li>
                    <li>ALL RIGHTS RESERVED.</li>                    
                </FooterBot>                     
            </FooterContainer>
        </FooterWrap>
    )
}

export default Footer
