import React from 'react'
import { useHistory } from 'react-router'
import { Container, TopMenuLi, TopMenuUl } from './styles'

const TopMenu = () => {
    const history = useHistory();
    const onClickPage = (pagePath:string) =>{
        history.push({
            pathname:'/customservice',
            state:{currPage:pagePath}
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
                           Hellow
                       </div>                                              
                       <ul>
                           <li>
                               <p>전체보기</p>
                               <p>부분보기</p>
                           </li>
                           <li>
                               <img src='/public/logo.gif'/>
                           </li>
                       </ul>
                   </TopMenuLi>
                   <TopMenuLi>
                        <div style={{                            
                            display:'inline'
                       }}>
                           Wolrd
                       </div> 
                        <ul>
                           <li>
                               <p>전체보기</p>
                               <p>부분보기</p>
                           </li>
                           <li>
                               <img src='/public/logo.gif'/>
                           </li>
                       </ul>
                   </TopMenuLi>
                   <TopMenuLi style={{color:'#cccccc'}}> | </TopMenuLi>
                   <TopMenuLi>이벤트</TopMenuLi>
                   <TopMenuLi onClick={()=>onClickPage('NOTICE')}>공지사항</TopMenuLi>
                   <TopMenuLi onClick={()=>onClickPage('REVIEW')}>후기</TopMenuLi>
               </TopMenuUl>
           </div>
        </Container>       
    )
}

export default TopMenu
