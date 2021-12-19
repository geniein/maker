import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router';
import useSWR from 'swr';
import {AvatarRound, HeaderContainer, HeaderLogo, HeaderWrap} from './styles';
import Hamburger from '@components/Hamburger';
import { Link } from 'react-router-dom';
import { Avatar, Badge} from '@material-ui/core';
import { ShoppingCart,Menu } from '@material-ui/icons';
import { Li } from '@components/Content/styles';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const history = useHistory();
    const isMobile = useMediaQuery({query:"(max-width: 576px)"})
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
    const userLevel = userData !== undefined ? userData.level : undefined;
    return (
        <div>
        <HeaderWrap>
            <HeaderContainer>            
                <HeaderLogo src="/public/logo.png" onClick={onClickLogo} style={{cursor:'pointer'}}/>
                <ul>                    
                    {!userData && !isMobile &&<li onClick={onClickLogin}>로그인</li>}
                    {!userData && !isMobile &&<li onClick={onClickSignup}>회원가입</li>}
                    {userData && !isMobile &&<li onClick={onClickLogOut}>로그아웃</li>}                
                    {userData && !isMobile &&<li onClick={()=>onClickPage('mypage','MYCONTENT')}>마이페이지</li>}                      
                    {!isMobile &&<li onClick={()=>onClickPage('customservice','FAQ')}>
                        <Link to={'customservice'} style={{textDecoration:'none', color: 'inherit'}}>고객지원</Link>                        
                    </li>
                    }
                    {!userData && isMobile && <li onClick={onClickLogin}>Login</li>}              
                    {userData && isMobile && <li onClick={()=>onClickPage('mypage','MYCONTENT')}><AvatarRound>My</AvatarRound></li>}              
                    {userData && <li>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart onClick={()=>onClickPage('mypage','MYCART')}/>
                        </Badge>
                        </li>}
                    <li>
                    <Badge><Menu onClick={onClickHamburger}></Menu></Badge></li>
                </ul>                
            </HeaderContainer>                                    
            <Hamburger isDisplay={display} setIsDisplay={setDisplay} userLevel={userLevel}></Hamburger>
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
