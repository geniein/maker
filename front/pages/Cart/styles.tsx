import styled from '@emotion/styled';



export const CartWrap = styled.div`
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
    }     
`;
export const CartTable = styled.table`
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
            object-fit: contain;
        }   
    }
    .cart_src{        
        padding: 25px 0px 25px 20px;
        width:30%        
    }
    .cart_title{
        text-align:center;
        width:30%
        padding: 25px 0px;
    }
    .cart_options{        
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

export const RemoveBtn = styled.div`
    color: #fff;
    cursor: pointer;
    background: pink;
    margin: 50px 20px 30px 20px;
    border: 0px;
    width: 50%;
    height: 60px;            
    border-radius: 2px;
    display: inline-flex;
    justify-content: center;    
    align-items: center;
`;