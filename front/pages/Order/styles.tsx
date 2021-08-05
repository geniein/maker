import styled from '@emotion/styled';

export const OrderInfoWrap = styled.div`
    display: inline-flex;
    flex-flow: column wrap;
    width: 80%;
    .title{
        text-align: left;
        font-size: 17px;
        color: #525252;
        margin-bottom: 30px;
        font-weight: bold;
        width: 100%;
        margin: 30px auto;
        border-bottom: 1px solid #cccc;
        span{
            font-size: 12px;
            margin-left: 10px;
            border-left: 1px solid #ccc;
            padding: 0px 10px;
            color: #b9b9b9;
        }
    }   
`;

export const OrderTable = styled.table`
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