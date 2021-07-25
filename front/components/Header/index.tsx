import React, { useCallback } from 'react'
import { useHistory } from 'react-router';
import {Container, HeaderLogo} from './styles';

const Header = () => {
    const history = useHistory();

    const onClickLogo = () => {
        history.push('/');
    }
    const onClickLogin = () => {
        history.push('login');
    };
    const onClickSignup = () => {
        history.push('signup');
    };

    return (        
        <Container>            
            <HeaderLogo src="/dist/images/logo.gif" onClick={onClickLogo} style={{cursor:'pointer'}}/>
            <ul>
                <li onClick={onClickLogin}>로그인</li>
                <li onClick={onClickSignup}>회원가입</li>
                <li>쿠폰등록</li>
                <li>고객지원</li>
            </ul>
        </Container>        
    )
}

export default Header
