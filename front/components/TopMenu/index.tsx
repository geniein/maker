import React from 'react'
import { Container, TopMenuLi, TopMenuUl } from './styles'

const TopMenu = () => {
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
                               <img src='/dist/images/logo.gif'/>
                           </li>
                       </ul>
                   </TopMenuLi>
                   <TopMenuLi>
                        <div style={{
                            cursor:'pointer',
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
                               <img src='/dist/images/logo.gif'/>
                           </li>
                       </ul>
                   </TopMenuLi>
               </TopMenuUl>
           </div>
        </Container>       
    )
}

export default TopMenu
