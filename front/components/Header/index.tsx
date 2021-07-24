import React from 'react'
import {Container, Img, Ul, Li} from './styles';

const Header = () => {
    return (        
        <Container>            
            <Img src="/dist/images/logo.gif"/>
            <Ul>
                <Li>로그인</Li>
                <Li>회원가입</Li>
                <Li>쿠폰등록</Li>
                <Li>고객지원</Li>
            </Ul>
        </Container>        
    )
}

export default Header
