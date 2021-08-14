import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const MPWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const MPContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const MyInfo = styled.div`
    .title{
        text-align: left;
        //font-size: 17px;
        font-weight: bolder;
        color: #525252;
        margin: 30px 0;
        display: inline-block;
        width: 100%;
        font-family: 'noto_b';
        
        span{
            font-size: 12px;
            margin-left: 10px;
            border-left: 1px solid #ccc;
            padding: 0px 10px;
            color: #b9b9b9;
        }
    }
    .myoptions{
        list-style: none;
        padding-top: 0;
        display: inline-block;
        width: 100%;
        margin-bottom: 100px;
    }
`;

export const MyInfoContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    margin-bottom:50px;
`;

export const MyBox = styled.div`
        float: left;
        width: 300px;
        border: 1px solid #eee;
        height: 150px;
        text-align: left;
        border-radius: 5px;
        .my_first{
            margin-top: 13px;
            font-size: 13px;
            font-family: 'noto_m';
        }
        .my_second{
            font-size: 13px;
            margin-bottom: 5px;
            font-family: 'noto_m';
        }
        .my_third{
            margin-bottom: 9px;
            color: #aaa;
        }
        .my_forth{
            color: #aaa;
        }
`;

export const MyOptionList = styled.div`
    width:100%;
    display:inline-flex;
    flex-flow: row wrap;
    ul{
        list-style: none;
    }
    li{
        width: 200px;
        border-bottom: 2px solid #ececec;
        padding: 15px 0;
        text-align:center;
        font-weight: bold;
        cursor:pointer;
        &:hover{
            color: #e1b47b;
            border-bottom: 3px solid #e1b47b; 
        }
    }
`;

export const MyDetail = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin-bottom:50px;
`;