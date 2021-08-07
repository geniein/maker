import styled from '@emotion/styled';

export const OrderInfoWrap = styled.div`
    display: inline-flex;
    flex-flow: column wrap;
    width: 90%;
    .title{
        text-align: left;
        font-size: 22px;
        color: #525252;
        margin: 30px 0px 10px 20px;        
        font-weight: bold;
        width: 100%;        
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
        font-size: 15px;
        color: #565656;     
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }   
    }
    .order_src{        
        padding: 25px 0px 25px 20px;
        width:30%        
    }
    .order_title{
        text-align:center;
        width:30%
        padding: 25px 0px;
    }
    .order_options{        
        width:40%
        padding: 25px 0px;
    }
    .pay_title{
        vertical-align: top;
        text-align: right;
        border-right: 1px solid #e4e4e4;
        background: #f4f4f4;
        width:15%;
        font-weight:bold;
        padding: 25px 15px 25px 0px;
    }
    .pay_info{
        padding: 25px 0px 25px 15px;
    }
    .pay_type{
        display:flex;
        flex-direction:column;
        padding: 0 15px;
    }
    .pay_content{
        font-weight:bolder;
        margin-top: -2px;
        padding: 10px;
        border: 2px solid #c5c7cd;
        background-color: #f4f6fa;
    }
    .pay_desc{
        padding: 10px 0;
        font-size: 11px;
    }
`;

export const PaySelector = styled.div`
    width:100%
    ul{
        width: 100%;
        position: relative;        
    }
    li{
        display: block;
        float: left;
        margin-right: 9px;
        padding: 0 0 0 2px;
        font-size: 12px;
        line-height: 39px;
        letter-spacing: -1px;
    }
    
`;

export const PayBtn = styled.div`
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