import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router';
import useSWR from 'swr';
import {Container, HeaderLogo} from './styles';
import * as gi from 'react-icons/gi'
import Modal from '@components/Modal';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
    const history = useHistory();

    const { data: userData, error, revalidate, mutate } = useSWR('/api/users', fetcher, {
        dedupingInterval: 2000, // 2초
      });

    const [display, setDisplay] = useState(false);
    const onClickLogo = () => {
        history.push('/');
    }
    const onClickLogin = () => {
        history.push('/login');
    };
    const onClickSignup = () => {
        history.push('/signup');
    };

    const onClickLogOut = (e:any) => {
        e.preventDefault();
        axios.post('/api/users/logout').then((res)=>mutate());
    };
    const onClickHamburger = () =>{        
        setDisplay(!display);
    }

    return (        
        <Container>            
            <HeaderLogo src="/public/logo.gif" onClick={onClickLogo} style={{cursor:'pointer'}}/>
            <ul>

                {!userData && <li onClick={onClickLogin}>로그인</li>}
                {!userData && <li onClick={onClickSignup}>회원가입</li>}
                {userData && <li onClick={onClickLogOut}>로그아웃</li>}                
                <li>쿠폰등록</li>                
                <li><Link to={'/customservice'} style={{textDecoration:'none', color: 'inherit'}}>고객지원</Link></li>                
                {userData && <li><AiOutlineShoppingCart onClick={()=>history.push('/user/cart')}/></li>}
                <li><gi.GiHamburgerMenu onClick={onClickHamburger}></gi.GiHamburgerMenu></li>
            </ul>
            <Modal isDisplay={display} setIsDisplay={setDisplay}></Modal>
        </Container>        
    )
}

export default Header
