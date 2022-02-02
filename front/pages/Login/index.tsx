import Carousel from '@components/Carousel'
import Content from '@components/Content'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { LoginTop, LoginContent, LoginLayoutLeft, LoginLayoutRight, LoginContainer, LoginWrap } from './styles'
import { useMediaQuery } from 'react-responsive';

const Login = () => {
    const history = useHistory();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const isMobile = useMediaQuery({query:"(max-width: 768px)"});
    const onClickLogin = useCallback(
        (e) => {
            e.preventDefault();
            axios.post('/api/users/login',{
                userId,
                userPassword
            }).then((res)=>{                
                console.log('sucess');
                history.push('/');
            }).catch((err)=>{
                alert('입력정보를 확인해주시기 바라니다.');
            });
        },
        [userId, userPassword],
    )

    const onClickTEST = ()=>{
        axios.post('/api/users',{
            data : 'test'
        }).then((res)=>console.log(res)).catch((e)=>console.log(e));
    }

    const onClickKaKao = useCallback( async(e) => {                   
        e.preventDefault();
        // await window.Kakao.Auth.authorize({
        //     redirectUri: 'http://localhost:3030/workspace/login'
        // })
        axios.get('/auth/kakao',
        {
            headers: {                
                "Access-Control-Allow-Origin": "*",                 
            }
        } ).then((res)=>console.log(res));        
    //     await window.Kakao.Auth.login({          
    //         success: async (res:any)=>{             
    //         await window.Kakao.API.request({
    //             url: '/v2/user/me',
    //             success: function(res:any) {                                      
    //                 // axios.post('/auth/login',
    //                 // { test : 'abc'
    //                 // }
    //                 // ).then((res)=>console.log(res));
    //                 console.log(res);
    //                 console.log(res.kakao_account);
    //                 // loginTypeChk(res.kakao_account.email, 'kakao');
    //             },
    //             fail: function(error:any) {
    //                 console.error(error)
    //             }
    //         })
    //     },
    //     fail :  (e:any)=>{      
    //         console.log(e);
    //     },          
    //     });
    }, []);

    const onClickKaKaoLogout = useCallback( async(e) => {                   
        e.preventDefault();
        // axios.get('/auth/kakao',
        // {
        //     headers: {                
        //         "Access-Control-Allow-Origin": "*",                
        //     }
        // } ).then((res)=>console.log(res));        
        await window.Kakao.Auth.login({          
            success: async (res:any)=>{             
            await window.Kakao.API.request({
                url: '/v1/user/unlink',                
                success: function(res:any) {                                      
                    // axios.post('/auth/login',
                    // { test : 'abc'
                    // }
                    // ).then((res)=>console.log(res));
                    console.log(res);
                    console.log(res.kakao_account);
                    // loginTypeChk(res.kakao_account.email, 'kakao');
                },
                fail: function(error:any) {
                    console.error(error)
                }
            })
        },
        fail :  (e:any)=>{      
            console.log(e);
        },          
        });
    }, []);

    // const loginTypeChk = (email: string, type: string) =>{        
    //     const cond:any = new Object();
    //     switch(type){
    //         case 'kakao':
    //             cond['kakaoEmail'] = email;
    //             break;
    //         case 'naver':
    //             cond['naverEmail'] = email;
    //             break;
    //         default:
    //             cond['email'] = email;
    //             break;
    //     }
    //     axios.post('/api/users/logintype',cond)
    //     .then((res)=>{
    //         if(res.data){    
    //             axios.post('/api/users/loginsns',cond)
    //             .then((res)=>{                
    //                 console.log('sucess');
    //                 history.push('/');
    //             }).catch((err)=>{
    //                 alert('입력정보를 확인해주시기 바라니다.');
    //             });
    //         }else{
    //             alert('연동된 계정이 없습니다. 신규가입해 주시기 바랍니다.');
    //             return false;
    //         }
    //     }
    //     );
    // }

    return (
        <div>
            <LoginTop>
                <p>
                    로그인 <br/>
                    Login
                </p>
            </LoginTop>
            {isMobile==false &&<LoginContent>
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
                                    <li onClick={()=>history.push('/workspace/signup')}>
                                        회원가입
                                    </li>
                                </ul>  
                            </div>                     
                        </form>
                    </LoginLayoutLeft>                                        
                    <LoginLayoutRight>
                        <p className='login_title'>SNS계정로그인</p>                        
                        <div className='sns_box naver' onClick={onClickTEST}>
                            <span>
                                <img src='/public/logo/logo_naver.png'/>
                            </span>
                            네이버 로그인
                        </div>
                        {/* <div className='sns_box kakao' onClick={onClickKaKao}>
                            <span>
                                <img src='/public/logo/logo_kakao.png'/>
                            </span>
                            카카오 로그인
                        </div> */}
                         <a className='sns_box kakao' href='/auth/kakao'>
                            <span>
                                <img src='https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png'/>
                            </span>
                            카카오 로그인
                        </a>
                        <div className='sns_info'>
                            <span>SNS를 통한 로그인 시,<br/></span>
                            회원만이 누릴 수 있는 혜택에서 제외될 수 있습니다. <br/>
                            간단한 회원가입으로 회원혜택을 누려보세요!                            
                        </div>
                    </LoginLayoutRight>
                </ul>
            </LoginContent>  
        }
        {isMobile &&
        <LoginWrap>
            <LoginContainer>
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
                    <div className='login_box'>
                        <input type='submit' className='login_naver' value='네이버 로그인' onClick={onClickLogin}></input>                          
                    </div>
                    {/* <div className='login_box'>
                        <input type='submit' className='login_kakao' value='카카오 로그인' onClick={onClickKaKao}></input>                          
                    </div> */}
                    <a href="/auth/kakao">
                        <input type='submit' className='login_kakao' value='카카오 로그인'></input>                          
                    </a>
                    
                    
                    <div className='btn_wrap'>                                
                        <ul className='sub_options'>
                            <li>
                                아이디 찾기
                            </li>                                
                            <li>
                                비밀번호 찾기
                            </li>                                    
                            <li onClick={()=>history.push('/workspace/signup')}>
                                회원가입
                            </li>
                        </ul>  
                    </div>                     
                </form>
            </LoginContainer>
        </LoginWrap>
        }         
        </div>
    )
}

export default Login
