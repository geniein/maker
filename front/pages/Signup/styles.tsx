import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const SignupWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;    

export const SignupTop = styled.div`    
    width:100%;
    height:200px;
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);    
    position: relative;    
    p {
        position:absolute;
        top:30%;        
        width:100%;
        text-align:center;
        font-weight:bold;
        font-size: 12px;
        letter-spacing: 3px;
    }
`;

export const SignupContent = styled.div`    
    position: relative;    
    width:100%;    
    text-align: center;    
    .signup_ul {
        display: flex;
        justify-content: center;
        list-style:none; 
    }
    .signup_container{
        margin-top:30px;        
        display: flex;        
        justify-content: center;        
        flex-direction:column;        
    }
`;

export const SignupAgree = styled.li`
    float: left;
    width: 31.33%;
    height: 420px;
    padding: 10px;
    font-family: 'Noto_R';
    font-size: 12px;
    font-weight: normal;
    h2{
        font-size: 14px;
        font-family: 'Noto_R';
        text-align: left;
        line-height: 20px;
        height: 20px;
    }
    span{
        font-size: 13px;
        text-align: left;
        width: 100%;
        display: inline-block;
        color: #bbb;
    }
    .text_box{
        padding: 10px;
        margin-top: 15px;
        border: 1px solid #ccc;
        
        textarea{
            width: 100%;
            resize: none;
            border: 0px;
            letter-spacing: 0.3px;
            line-height: 1.6;
            height: 310px;
            color: #9e9e9e;            
            &::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                border: 3px solid #fff;                            
            }
            &::-webkit-scrollbar-thumb {
                height: 50px;
                width: 50px;
                background: rgba(0, 0, 0, .2);
                -webkit-border-radius: 8px;
                border-radius: 8px;
                -webkit-box-shadow: inset 0 0 0px rgb(0 0 0 / 10%);                
            }
            &::-webkit-scrollbar-track {
                background: #efefef;
                -webkit-border-radius: 10px;
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 0px rgb(0 0 0 / 20%);                
            }
        }        
    }
`;

export const BtnWrap = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin: 50px 0;    
    
    .btn_submit{
        border: 0px;
        width: 300px;
        margin: 0 30px 20px 30px;
        height: 60px;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        background-color: #eac684;
    }
    .btn_submit_naver{
        border: 0px;
        width: 300px;
        margin: 0 30px 20px 30px;
        height: 60px;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        background-color: #42a70a;
        background-image: url(/public/logo/logo_naver.png);
        background-repeat: no-repeat;
        background-position: 10px center;
    }
    .btn_submit_kakao{
        border: 0px;
        width: 300px;
        margin: 0 30px 20px 30px;
        height: 60px;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        background-color: #f5dc00;
        background-image: url(/public/logo/logo_kakao.png);
        background-repeat: no-repeat;
        background-position: 10px center;
    }
`;

export const InputWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content:center;
    align-content: space-around;
    margin-bottom: 10px;    
`;
export const InputTitle = styled.div`    
    height: 30px;
    width: 400px;    
    font-size: 15px;
    font-weight: bold;
    text-align: left;    
    text-indent: 15px;    
`;
export const InputBox = styled.input`    
    border: 1px solid #dadada;
    height: 52px;
    width: 400px;
    border-radius: 3px;
    font-size: 15px;
    text-indent: 15px;
`;

export const InputBtn = styled.div`
    background: #888;
    border: 0px;
    width: 400px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    display: inline-block;
`;