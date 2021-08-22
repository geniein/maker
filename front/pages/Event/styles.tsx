import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const EventWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;        
`;


export const EventTop = styled.div`
    background-color: #f7f7f7;
    padding: 20px 0;
    display:flex;
    justify-content: center;
    .title_wrap{
        ${responsiveWidth};
    }
    .event_title{
        text-align: left;
        font-size: 17px;
        color: #525252;
        margin-bottom: 30px;
        font-weight: bold;
        span{
            font-size: 12px;
            margin-left: 10px;
            border-left: 1px solid #ccc;
            padding: 0px 10px;
            color: #b9b9b9;
        }        
    }    
`;

export const EventMenu = styled.div`
    width:100%;
    height: 50px;
    border-bottom: 1px solid; #ccc;
    margin-bottom: 20px;
    display:flex;
    justify-content:center;
    ul{
        height: 50px;
        list-style: none;
        display: inline-block;    
        margin: 0 0;    
        li{
            width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
            float: left;
            &:hover{
                border-bottom: 1px solid rgb(255, 200, 99);
                transition: 0.3s;
                opacity: 1;                                
            }
        }
    }
    
`;

export const EventItemList = styled.ul`
    width: 100%;
    margin-bottom: 50px;
    list-style: none;
    margin: 0 auto;
    display: inline-block;    
    margin-top: -4px;    
    ${responsiveWidth};
`;

export const EventItem = styled.li`
    width: 100%;
    height: 230px;
    padding: 20px 0px;
    border-bottom: 1px solid #dadada;
    margin: 0 auto;
    ${responsiveWidth};
    display:inline-flex;
    .event_img{
        width: 440px;
        float: left;
        position: relative;
        height: 200px;
        cursor:pointer;
        &:hover{           
            transition: all 0.8s ease;
            background-color: black;
            opacity: 0.5;
        }
        img{
            width:100%;
            height:100%;
        }

    }
    
    .event_sub1{        
        font-size: 21px;
        color: #656160;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-bottom: 0px;
        font-family: 'Noto_D';
        margin: 10px 0;
    }
    .event_sub2{
        font-size: 11px;
        color: #b8b8b8;
        margin: 10px 0;
    }
    .event_period{
        font-size: 13px;
        color: #ff4200;
        letter-spacing: 0;
        padding-bottom: 0;
        margin-bottom: 2px;
        font-family: 'Noto_l';
        margin: 10px 0;
    }
    .event_infp{
        font-size: 14px;
        color: #656160;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-family: 'Noto_D';
        margin: 10px 0;
    }

    .event_text{
        width: 550px;
        height: auto;
        padding: 16px 70px;
        display:flex:        
    }

    .onOff{
        right: 0;
        padding: 5px 10px;
        border: 1px solid #e96d6d;
        position: relative;
        color: #e96d6d;
        border-radius: 5px;
        float:right;
    }
    .event_btn{
        width: 150px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #85baba;
        color: #85baba;
        padding: 0px;
        margin-top: 10px;
        font-family: 'Noto_B';
        border-radius: 3px;
        cursor:pointer;
        &:hover{           
            transition: all 0.8s ease;
            background-color: black;
            opacity: 0.5;
        }
    }
`;