import styled from '@emotion/styled';

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
        text-align: center;
        width: 750px;
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
    width: 1200px;
    margin: 0 auto;
    .title {
        text-align: left;
        font-size: 17px;
        color: #525252;
        margin-bottom: 30px;
        font-weight: bold;
        width: 1200px;
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
export const NoticeTable = styled.table`
    width: 1200px;
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
    }
`;