import React from 'react'
import { useHistory } from 'react-router'
import { TopWrap, TopContainer, TopMenuLi, TopMenuUl } from './styles'

const TopMenu = () => {
    const history = useHistory();
    const onClickPage = (pagePath:string,pageState:string) =>{
        history.push({
            pathname: `/workspace/${pagePath}`,
            state:{currPage:pageState}
        })
    }    
    return (
        <TopWrap>
            <TopContainer>                
                <TopMenuUl>
                    <TopMenuLi>
                        <div style={{
                        cursor:'pointer',
                        display:'inline'
                        }}>
                        광고영상
                        </div>                                              
                        <ul>
                            <li>
                                <p onClick={()=>onClickPage('contentlist/adver','ALL')}>전체보기</p>
                                <p onClick={()=>onClickPage('contentlist/adver','MARKET')}>매장홍보</p>
                                <p onClick={()=>onClickPage('contentlist/adver','COMPANY')}>기업홍보</p>
                                <p onClick={()=>onClickPage('contentlist/adver','SELF')}>자기PR</p>
                                <p>포트폴리오</p>
                            </li>
                            <li>
                                <img src='/public/logo.png'/>
                            </li>
                        </ul>
                    </TopMenuLi>
                    <TopMenuLi>
                        <div style={{                            
                        display:'inline'
                        }}>
                        영상편지
                        </div> 
                        <ul>
                            <li>
                                <p onClick={()=>onClickPage('contentlist/letter','ALL')}>전체보기</p>
                                <p onClick={()=>onClickPage('contentlist/letter','PROPOSE')}>프로포즈</p>
                                <p onClick={()=>onClickPage('contentlist/letter','WEDDING')}>웨딩스토리</p>
                                <p>성장스토리</p>
                                <p>가족스토리</p>
                            </li>
                            <li>
                                <img src='/public/logo.png'/>
                            </li>
                        </ul>
                    </TopMenuLi>
                    <TopMenuLi>
                        <div style={{                            
                        display:'inline'
                        }}>
                        모바일초대장
                        </div> 
                        <ul>
                            <li>
                                <p onClick={()=>onClickPage('contentlist/invite','ALL')}>전체보기</p>
                                <p>개업일초대</p>
                                <p>기념일초대</p>
                                <p>웨딩초대</p>
                                <p>감사인사</p>
                            </li>
                            <li>
                                <img src='/public/logo.png'/>
                            </li>
                        </ul>
                    </TopMenuLi>
                    <TopMenuLi style={{color:'#cccccc'}}> | </TopMenuLi>
                    <TopMenuLi>이벤트</TopMenuLi>
                    <TopMenuLi onClick={()=>onClickPage('/customservice','NOTICE')}>공지사항</TopMenuLi>
                    <TopMenuLi onClick={()=>onClickPage('/customservice','REVIEW')}>후기</TopMenuLi>
                </TopMenuUl>                
            </TopContainer>
        </TopWrap>       
    )
}

export default TopMenu
