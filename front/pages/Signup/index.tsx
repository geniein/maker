import useInput from '@hooks/useInput'
import axios from 'axios'
import React, { useCallback, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { InputBtn, BtnWrap, InputBox, InputWrap, SignupAgree, SignupContent, SignupTop, SignupWrap, InputTitle } from './styles'
import { signUpMsg } from '@utils/utils';
import { useHistory } from 'react-router';
const Signup = () => {
    const history = useHistory();
    const termsUse = signUpMsg;
    
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [agreePrivate, setAgreePrivate] = useState(false);
    const [agreeMarket, setAgreeMarket] = useState(false);
    const [agreeAll, setAgreeAll] = useState(false);
    const [passAgree, setPassAgree] = useState(false);

    const [userId, onChnageUserId,setUserId] = useInput('');    
    const [userName,onChnageUserName, setUserName] = useInput('');    
    const [userNickname,onChnageUserNickname, setUserNickname] = useInput('');        
    const [userPassword, onChnageUserPassword,setUserPassword] = useInput('');    
    const [userPasswordChk, onChnageUserPasswordChk,setUserPasswordChk] = useInput('');
    const [kakaoEmail, onChnagekakaoEmail,setkakaoEmail] = useInput('');
    const [naverEmail, onChnagenaverEmail,setnaverEmail] = useInput('');
    
    const [dupleIdChk, setDupleIdChk] = useState(false);
    
    const isMobile = useMediaQuery({query:"(max-width: 768px)"})

    const onClickAgree = () =>{                
        if(!agreeTerms || !agreePrivate){
            alert('필수약관 동의를 하셔야 회원가입이 가능합니다.')
            return false;
        }
        setPassAgree(!passAgree);
    }
    
    const onClickKaKao = useCallback( async() => {        
        if(!agreeTerms || !agreePrivate){
            alert('필수약관 동의를 하셔야 회원가입이 가능합니다.')
            return false;
        }        
        await window.Kakao.Auth.login({          
            success: async (res:any)=>{             
            await window.Kakao.API.request({
                url: '/v2/user/me',
                success: function(res:any) {                                                          
                    loginTypeChk(res.kakao_account.email, 'kakao');
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
    }, [agreeTerms, agreePrivate]);

    const loginTypeChk = (email: string, type: string) =>{        
        const cond:any = new Object();
        switch(type){
            case 'kakao':
                cond['kakaoEmail'] = email;
                break;
            case 'naver':
                cond['naverEmail'] = email;
                break;
            default:
                cond['email'] = email;
                break;
        }
        axios.post('/api/users/logintype',cond)
        .then((res)=>{
            if(res.data){
                alert('이미 연동된 계정입니다. 로그인 화면에서 로그인 해주시기 바랍니다.');
                return false;
            }else{
                switch(type){
                    case 'kakao':
                        setkakaoEmail(email);
                        break;
                    case 'naver':
                        setnaverEmail(email);
                        break;                    
                }
                setPassAgree(!passAgree);
            }
        }
        );
    }

    const onClickAgreeAll = useCallback(() =>{                        
        setAgreeAll(!agreeAll);        
        if(agreeAll){
            setAgreeTerms(false);
            setAgreePrivate(false);
            setAgreeMarket(false);
        }else {
            setAgreeTerms(true);
            setAgreePrivate(true);
            setAgreeMarket(true);
        }
    },[agreeTerms,agreePrivate,agreeMarket,agreeAll]);

    const onClickSignup = useCallback((e:any) =>{
        e.preventDefault();
        if(!dupleIdChk){
            alert('ID중복체크를 해주십시오');
            return false;
        }
        if(!pwReg(userPassword)) return false; //비밀번호 정규식체크
        if(userPassword !== userPasswordChk){
            alert('비밀번호가 같지 않습니다. 다시 확인해주시기 바랍니다.');
            return false;
        }
        axios.post('/api/users',{
            userId,
            email:userId,
            userName,
            userNickname,
            userPassword,
            kakaoEmail,
            naverEmail
        }).then((res)=>{
            alert('회원가입이 되었습니다.');
            history.push(`/workspace/login`);        
        }).catch((e)=>console.log(e));
    },[dupleIdChk, userId, userName, userPassword, userNickname, userPasswordChk, kakaoEmail, naverEmail]);

    const onClickDupleId = ()=>{
        setDupleIdChk(false);
        if(!idReg(userId)) return false;

        axios.get(`/api/users/duple/${userId}`)
        .then((res)=>{
            if(res.data){
                alert('중복된 ID입니다.');
            }else {                
                setDupleIdChk(true);                
                alert('사용가능한 ID입니다.');
            }
        })
    }

    const idReg = (id:string)=>{
        const reg = /^[A-Za-z0-9+,\@,\.]{4,30}$/;
        if( !reg.test(id) ) {
            alert("영대소문자 및 숫자 혹은 이메일 형식만 입력 가능 합니다.");
            return false;
        }
        return true;
    }

    const pwReg = (pw:string)=>{
        const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;        
        //reg = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
        // 8 자, 하나 이상의 대문자, 하나의 소문자 및 하나의 숫자 포함해야 합니다.
        if( !reg.test(pw) ) {
            alert("비밀번호는 최소 8 자, 하나 이상의 문자와 하나의 숫자 포함해야 합니다.");
            return false;
        }
        return true;
    }
    
    return (
        <div>            
            <SignupTop>
                <p>
                    회원가입 <br/>
                    Sign Up
                </p>
            </SignupTop>
            <SignupWrap>
            {!passAgree && <SignupContent>
                <ul className='signup_ul' style={isMobile ==true ? {flexDirection:'column'} : undefined}>
                    <SignupAgree style={isMobile ==true ? {width:'100%'} : undefined}>
                        <h2>이용약관</h2>
                        <span>Terms Of Use</span>
                        <div className='text_box'>
                            <textarea value={termsUse} readOnly>                                                    
                            </textarea>                                                        
                        </div>
                        <span><input type='checkbox' onChange={() => setAgreeTerms(!agreeTerms)} checked={agreeTerms}/>이용약관에 동의합니다.</span>
                    </SignupAgree>
                    <SignupAgree style={isMobile ==true ? {width:'100%'} : undefined}>
                        <h2>개인정보취급방침</h2>
                        <span>Private Policy</span>
                        <div className='text_box'>
                            <textarea value={termsUse} readOnly>                                                    
                            </textarea>                                                        
                        </div>
                        <span><input type='checkbox' onChange={() => setAgreePrivate(!agreePrivate)} checked={agreePrivate}/>개인정보취급방침에 동의합니다.</span>
                    </SignupAgree>
                    <SignupAgree style={isMobile ==true ? {width:'100%'} : undefined}>
                        <h2></h2>
                        {isMobile== false && <span><input type='checkbox' id='agreeAll' onClick={onClickAgreeAll}/>전체동의</span>}
                        <div className='text_box'>
                            <textarea value={termsUse} readOnly>                                                        
                            </textarea>                                                        
                        </div>
                        <span><input type='checkbox' onChange={() => setAgreeMarket(!agreeMarket)} checked={agreeMarket}/>마케팅 선택 동의에 대한 수집 및 이용(선택)</span>
                        {isMobile== true && <span><input type='checkbox' id='agreeAll' onClick={onClickAgreeAll}/>전체동의</span>}
                    </SignupAgree>                   
                </ul>
                <BtnWrap>
                    <input type='submit' className='btn_submit' value='회원가입' onClick={onClickAgree}></input>
                    <a href='/oauth/kakao' style={{textDecorationLine: 'none'}}>
                        {/* <input type='submit' className='btn_submit_kakao' onClick={onClickKaKao} value='카카오 아이디로 회원가입'/> */}
                        <div className='btn_submit_kakao'>카카오 아이디로 회원가입</div>
                    </a>
                    <a href='/oauth/naver' style={{textDecorationLine: 'none'}}>
                        {/* <input type='submit' className='btn_submit_naver' value='네이버 아이디로 회원가입'/> */}
                        <div className='btn_submit_naver'>네이버 아이디로 회원가입</div>
                    </a>
                </BtnWrap>
            </SignupContent>
            }
            {passAgree && <SignupContent>                
                    <div className='signup_container'>
                        <InputWrap>
                            <InputTitle>아이디</InputTitle>                            
                            <InputBox placeholder='아이디' onChange={onChnageUserId}></InputBox>                        
                        </InputWrap>
                        <InputWrap>                                                    
                            <InputBtn onClick={onClickDupleId}> Check Duplication</InputBtn>                                                                      
                        </InputWrap>                        
                        <InputWrap>         
                            <InputTitle>비밀번호</InputTitle>                                               
                            <InputBox type='password' placeholder='비밀번호'onChange={onChnageUserPassword}></InputBox>                                    
                        </InputWrap>                            
                        <InputWrap> 
                            <InputTitle>비밀번호 재확인</InputTitle>                                                       
                            <InputBox type='password' placeholder='비밀번호' onChange={onChnageUserPasswordChk}></InputBox>                               
                        </InputWrap>
                        <InputWrap>    
                            <InputTitle>닉네임</InputTitle>                                                    
                            <InputBox placeholder='별명' onChange={onChnageUserNickname}></InputBox>                              
                        </InputWrap>                        
                        <InputWrap>
                            <InputTitle>이름</InputTitle>
                            <InputBox placeholder='이름' onChange={onChnageUserName}></InputBox>                                  
                        </InputWrap>
                        <InputWrap>
                            <InputTitle>휴대전화</InputTitle>                            
                            <InputBox placeholder='전화번호'></InputBox>                           
                        </InputWrap>
                        <InputWrap>
                            <InputBtn style={{backgroundColor:'#eac684'}} onClick={onClickSignup}> 회원가입</InputBtn>                                                                                                  
                        </InputWrap>                        
                    </div>
                    {/* <BtnWrap>
                    <input type='submit' className='btn_submit' value='회원가입' onClick={onClickSignup}></input>
                    <input type='submit' className='btn_submit_kakao' value='취소' onClick={()=>history.go(-1)}/>                    
                    </BtnWrap>                 */}
            </SignupContent>
            }
            </SignupWrap>            
        </div>
    )
}

export default Signup
