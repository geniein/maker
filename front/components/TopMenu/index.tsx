import React from 'react'
import { useHistory } from 'react-router'
import { Container, TopMenuLi, TopMenuUl } from './styles'

const TopMenu = () => {
    const history = useHistory();
    const onClickPage = (pagePath:string,pageState:string) =>{
        history.push({
            pathname: pagePath,
            state:{currPage:pageState}
        })
    }    
    return (
        <Container>
            <div style={{
            position: 'relative',
            top: '0px',
            zIndex: 999,
            borderBottom: '0px'
            }}>
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
                                <p onClick={()=>onClickPage('/contentlist/adver','All')}>전체보기</p>
                                <p>매장홍보</p>
                                <p>기업홍보</p>
                                <p>자기PR</p>
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
                                <p onClick={()=>onClickPage('/contentlist/letter','All')}>전체보기</p>
                                <p>프로포즈</p>
                                <p>웨딩스토리</p>
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
                                <p onClick={()=>onClickPage('/contentlist/invite','All')}>전체보기</p>
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
            </div>
        </Container>       
    )
}

export default TopMenu
