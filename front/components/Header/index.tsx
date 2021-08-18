import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router';
import useSWR from 'swr';
import {HeaderContainer, HeaderLogo, HeaderWrap} from './styles';
import Hamburger from '@components/Hamburger';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { ShoppingCart,Menu } from '@material-ui/icons';
import { Li } from '@components/Content/styles';

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
        history.push('/workspace/login');
    };
    const onClickSignup = () => {
        history.push('/workspace/signup');
    };

    const onClickLogOut = (e:any) => {
        e.preventDefault();
        axios.post('/api/users/logout').then((res)=>mutate());
    };
    const onClickHamburger = () =>{        
        setDisplay(!display);
    }    
    const onClickPage = (pagePath:string,pageState?:string) =>{
        history.push({
            pathname: `/workspace/${pagePath}`,
            state:{currPage:pageState}
        })
    }    

    return (
        <div>
        <HeaderWrap>
            <HeaderContainer>            
                <HeaderLogo src="/public/logo.png" onClick={onClickLogo} style={{cursor:'pointer'}}/>
                <ul>

                    {!userData && <li onClick={onClickLogin}>로그인</li>}
                    {!userData && <li onClick={onClickSignup}>회원가입</li>}
                    {userData && <li onClick={onClickLogOut}>로그아웃</li>}                
                    {userData && <li onClick={()=>onClickPage('mypage','MYCONTENT')}>마이페이지</li>}                      
                    <li onClick={()=>onClickPage('customservice','FAQ')}>
                        <Link to={'customservice'} style={{textDecoration:'none', color: 'inherit'}}>고객지원</Link>                        
                    </li>                
                    {userData && <li>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart onClick={()=>onClickPage('mypage','MYCART')}/>
                        </Badge>
                        </li>}
                    <li>
                    <Badge><Menu onClick={onClickHamburger}></Menu></Badge></li>
                </ul>                
            </HeaderContainer>                                    
            <Hamburger isDisplay={display} setIsDisplay={setDisplay}></Hamburger>
        </HeaderWrap>
        <div style={{paddingTop:'70px'}}/>        
        </div>
        // <HeaderWrapNew>
        //     <Link to=''>logo</Link>
        //     <NavigationContainer>
        //         <ul className='menu'>
        //             <MenuItem>Home
        //                 <ul className='submenu'>                            
        //                     <SubMenuItem>
        //                         <Link to= '' className='sublink'>SubMenu</Link>
        //                     </SubMenuItem>
        //                     <SubMenuItem>
        //                         <Link to= '' className='sublink'>SubMenu</Link>
        //                     </SubMenuItem>
        //                     <SubMenuItem>
        //                         <Link to= '' className='sublink'>SubMenu</Link>
        //                     </SubMenuItem>
        //                 </ul>
        //             </MenuItem>
        //             <MenuItem>Home1</MenuItem>
        //             <MenuItem>Home2</MenuItem>
        //             <MenuItem>Home3</MenuItem>
        //             <MenuItem>Home4</MenuItem>
        //         </ul>
        //     </NavigationContainer>
        // </HeaderWrapNew>
    )
}

export default Header
