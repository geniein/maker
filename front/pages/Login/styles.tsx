import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const LoginTop = styled.div`    
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
export const LoginContent = styled.div`    
    position: relative;    
    width:100%;    
    text-align: center;    
    .login_ul {
        display: flex;
        justify-content: center;
        list-style:none; 
    }
`;

export const LoginLayoutLeft = styled.li`    
    width: 500px;
    height: 400px;
    padding: 30px;
    margin: 20px 40px 103px 40px;
    border: 1px solid #e0e0e0;

    .login_title{
        font-size: 20px;
        font-weight: 500;        
        color: #2c2c2c;
        text-align: left;
    }
    .login_box {
        width: 100%;
        height: 40px;
        position: relative;
        margin: 0 auto 25px 0;
        text-align: center;
        
        .login_text{
            width: 320px;
            height: 50px;
            background-repeat: no-repeat;
            background-position: 10px center;
            text-indent: 50px;
            border: 1px solid #ccc;
            color: #2f2f2f;
            border-radius: 3px;
        }
        .login_btn{
                    color: #fff;
                    cursor: pointer;
                    background: #eac684;
                    border: 0px;
                    width: 322px;
                    height: 60px;            
                    border-radius: 2px;        
                }  
    }
    .btn_wrap{
        text-align: center;        
        width: 100%;         
        .sub_options{
            list-style: none;
            margin: 30px auto;
            width: 400px;
            height: 30px;            
            li{              
                display: inline-block;                  
                width: 100px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
            }
        }
    }
`;

export const LoginLayoutRight = styled.li`    
    width: 500px;
    height: 400px;
    padding: 30px;
    margin: 20px 40px 103px 40px;
    border: 1px solid #e0e0e0;    

    .login_title{
        font-size: 20px;
        font-weight: 500;        
        color: #2c2c2c;
        text-align: left;
    }
    .sns_box{
        width: 280px;
        height: 60px;
        margin: 0 auto;
        color: #fff;
        line-height: 60px;
        font-size: 15px;        
        cursor:pointer;
        span {
            position: relative;
            left: -50px;
            top: -1.5px;
            padding:0 20px 0 10px;
            img {
                vertical-align: middle;
                width: 45px;              
            }
        }
    }
    
    .sns_info{
        font-size: 13px;
        color: #777;
        line-height: 23px;
        margin: 18px 0 0 76px;
        text-align: left;

        span{
            font-size: 14px;
            color: #b1b1b1;
            font-weight: bold;
        }
    }

    .naver {
        background-color: #09bc00;
        margin: 60px auto 10px auto;
        border-radius: 2px;
    }

    .kakao {
        background-color: #f5dc00;
        border-radius: 2px;
    }
`;

export const LoginWrap = styled.div`    
    position: relative;    
    width:100%;    
    text-align: center;
    display: flex;
    justify-content: center;        
`;

export const LoginContainer = styled.div`    
    width: 500px;
    height: 500px;
    padding: 30px;
    margin: 20px 40px;
    border: 1px solid #e0e0e0;

    .login_title{
        font-size: 20px;
        font-weight: 500;        
        color: #2c2c2c;
        text-align: left;
    }
    .login_box {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 40px;
        position: relative;
        margin: 0 auto 25px 0;
        text-align: center;
        
        .login_text{
            width: 320px;
            height: 50px;
            background-repeat: no-repeat;
            background-position: 10px center;
            text-indent: 50px;
            border: 1px solid #ccc;
            color: #2f2f2f;
            border-radius: 3px;
        }
        .login_btn{
                    color: #fff;
                    cursor: pointer;
                    background: #eac684;
                    border: 0px;
                    width: 322px;
                    height: 60px;            
                    border-radius: 2px;        
                }
        .login_naver{
            color: #fff;
            cursor: pointer;
            background-color: #09bc00;
            border: 0px;
            width: 322px;
            height: 60px;
            line-height: 60px;
            text-align: center;            
            border-radius: 2px;        
            padding: 20px;
        }
        .login_kakao{
            color: #fff;
            cursor: pointer;
            background-color: #f5dc00;
            border: 0px;
            width: 322px;
            line-height: 60px;
            text-align: center;
            height: 60px;            
            border-radius: 2px;        
            padding: 20px;
        }    
    }
    .btn_wrap{
        text-align: center;        
        width: 100%;         
        .sub_options{
            list-style: none;
            margin: 30px auto;
            width: 400px;
            height: 30px;            
            li{              
                display: inline-block;                  
                width: 100px;
                height: 30px;
                text-align: center;
                line-height: 30px;
            }
        }
    }     
`;