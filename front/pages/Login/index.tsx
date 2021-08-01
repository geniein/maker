import Carousel from '@components/Carousel'
import Content from '@components/Content'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { LoginTop, LoginContent, LoginLayoutLeft, LoginLayoutRight } from './styles'

const Login = () => {
    const history = useHistory();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onClickLogin = useCallback(
        (e) => {
            e.preventDefault();
            axios.post('/api/users/login',{
                email: userId,
                password: userPassword
            }).then((res)=>{                
                console.log('sucess');
                history.push('/');
            }).catch((err)=>{
                alert('입력정보를 확인해주시기 바라니다.');
            });
        },
        [userId, userPassword],
    )
    return (
        <div>
            <Header/>
            <TopMenu/>
            <LoginTop>
                <p>
                    로그인 <br/>
                    Login
                </p>
            </LoginTop>
            <LoginContent>
                <ul className='login_ul' style={{width:'100%'}}>
                    <LoginLayoutLeft>
                        <form id='logininfo'>
                            <p className='login_title'>회원로그인</p>                           
                            <div className='login_box'>
                                <input type='text' id='userId' className='login_text' placeholder='input your ID' onChange={(e:any)=>{setUserId(e.target.value)}}>
                                </input>
                            </div>
                            <div className='login_box'>
                                <input type='password' id='userPwd' className='login_text' placeholder='input your Password' onChange={(e:any)=>{setUserPassword(e.target.value)}}>
                                </input>
                            </div>
                            <div className='login_box'>
                                <input type='submit' className='login_btn' value='로그인' onClick={onClickLogin}></input>                          
                            </div>
                            <div className='btn_wrap'>                                
                                <ul className='sub_options'>
                                    <li>
                                        아이디 찾기
                                    </li>                                
                                    <li>
                                        비밀번호 찾기
                                    </li>                                    
                                    <li>
                                        회원가입
                                    </li>
                                </ul>  
                            </div>                     
                        </form>
                    </LoginLayoutLeft>                                        
                    <LoginLayoutRight>
                        <p className='login_title'>SNS계정로그인</p>                        
                        <div className='sns_box naver'>
                            <span>
                                <img src='/dist/images/logo/logo_naver.png'/>
                            </span>
                            네이버 로그인
                        </div>
                        <div className='sns_box kakao'>
                            <span>
                                <img src='/dist/images/logo/logo_kakao.png'/>
                            </span>
                            카카오 로그인
                        </div>
                        <div className='sns_info'>
                            <span>SNS를 통한 로그인 시,<br/></span>
                            회원만이 누릴 수 있는 혜택에서 제외될 수 있습니다. <br/>
                             간단한 회원가입으로 회원혜택을 누려보세요!                            
                        </div>
                    </LoginLayoutRight>
                </ul>
            </LoginContent>
            <Footer/>
        </div>
    )
}

export default Login
