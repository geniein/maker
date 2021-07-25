import Carousel from '@components/Carousel'
import Content from '@components/Content'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import React from 'react'
import { LoginTop, LoginContent, LoginLayoutLeft, LoginLayoutRight } from './styles'

const Login = () => {
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
                <ul style={{width:'100%'}}>
                    <LoginLayoutLeft>
                        <form id='logininfo'>
                            <p className='login_title'>회원로그인</p>
                            <div className='login_box'>
                                <input type='text' id='userId' className='login_text' placeholder='input your ID'>
                                </input>
                            </div>
                            <div className='login_box'>
                                <input type='text' id='userPwd' className='login_text' placeholder='input your Password'>
                                </input>
                            </div>
                            <div className='login_box'>
                                <input type='submit' className='login_btn'></input>                          
                            </div>
                            {/* <div className='btn_wrap'>
                                <input type='submit' className='login_btn'></input>                          
                                <ul className='sub_options'>
                                    <li>
                                        아이디 찾기
                                    </li>
                                    <li>
                                        비밀번호 찾기
                                    </li>
                                </ul>  
                            </div>                      */}
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
                    </LoginLayoutRight>
                </ul>
            </LoginContent>
            <Footer/>
        </div>
    )
}

export default Login
