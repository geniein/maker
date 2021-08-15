import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const CSWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const CSTop = styled.div`    
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

export const CSMenu = styled.div`
    border-bottom: 1px solid #eaeaea;
    height: 70px;
    margin-bottom: 20px;
    ul{
        display:inline-flex;
        justify-content:center;
        flex-direction:row;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        list-style: none;
    }
    li{
        float: left;
        height: 70px;
        line-height: 70px;
        width: 150px;
        cursor: pointer;
        opacity:1;
    }
    pick_line {
        border-top: 1px solid rgb(255, 200, 99);
        width: 150px;
        position: relative;        
    }   
`;    

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    .title {
        text-align: left;
        font-size: 17px;
        color: #525252;
        margin-bottom: 30px;
        font-weight: bold;
        width: 100%;
        margin: 30px auto;
        span{
            font-size: 12px;
            margin-left: 10px;
            border-left: 1px solid #ccc;
            padding: 0px 10px;
            color: #b9b9b9;
        }
    }
`;
export const NoticeWrap = styled.div`
`;
export const NoticeTable = styled.table`
    width: 100%;
    margin-bottom: 50px;
    border-spacing: 0px;
    margin: 0 auto;
    border-top: 1px solid #cccc;
    tbody{
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;        
    }
    th{
        height: 70px;
        font-size: 11px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #dadada;
    }
    td{
        border-bottom: 1px solid #dadada;
        padding: 25px 0px;
        font-size: 12px;
        color: #565656;
        text-align: center;
    }
    .notice_row{
        cursor: pointer;
    }
    .notice_row:hover{
        background-color: #FFF0F5;
    }        
`;

export const Paging = styled.ul`
    width: 100%;
    margin-top: 10px !important;
    list-style: none !important;
    text-align: center !important;
    margin: 0px auto 0px !important;
    display: inline-block;

    li {
        display: inline-block;
        width: 20px !important;
        height: 20px !important;
        text-align: center !important;
        line-height: 20px !important;
        cursor:pointer;
    }
`;

export const NoticeInner = styled.div`    
    .notice_sub{
        width: 130px;
        background-color: #f7f7f7;
        border-right: 1px solid #dadada;
    }
    .notice_title{
        text-align: left;
        text-indent: 10px;
    }
    .notice_view{
        padding: 15px 0px;
        border-bottom: 1px solid #dadada;
        width: 100%;
        margin: 0 auto;
    }
`;

export const GoListBtn = styled.div`
    color: #fff;
    cursor: pointer;
    background: #eac684;
    margin: 50px 20px 30px 20px;
    border: 0px;
    width: 250px;
    height: 60px;            
    border-radius: 2px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;