import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const MyWrap = styled.div`
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
`;

export const MyContentMenu = styled.ul`    
    width: 100%;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;
    position: relative;
    list-style: none;
    display:inline-flex;
    justify-content:center;
    ${responsiveWidth};
    li{
      width: 226px;
      height: 50px;
      cursor: pointer;
      padding: 14.5px 6px;
      color: #3f3f3f;      
      text-align: center;
      font-size: 14px;      
      &:hover{
        color: #e1b47b;
        border-bottom: 3px solid #e1b47b;
      }
    }
`;

export const MyContentList =styled.div`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 30px auto;
    border: 1px solid #000;
    ${responsiveWidth};   
`;

export const MyItem = styled.div`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 10px auto;    
    .list_title{
        display: inherit;     
        height: 30px;        
        font-weight:bold;
        text-align:center;
        margin-bottom:10px;
        p{
            width:50%;
        }
    }
    .item_wrap{
        display:flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 100%;        
        img{
            width:480px;
            height:270px;
        }
        .item_box{
            width: 500px;
            height: 300px;
            text-align: center;
            padding: 20px;
            padding-bottom: 36px;
        }
        .item_comment{
            color: #ff1515;
            font-size: 13px;
            font-weight: normal;
            margin-bottom: 10px;
            text-align: left;
        }
        .item_btn{
            color: #808080;
            background-color: #fff;
            height: 50px;
            border-radius: 2px;
            line-height: 50px;
            width: 450px;
            float: left;
            margin-top: 10px;
            border: 1px solid #808080;
        }
    }
`;

export const NoItem = styled.div`
    padding: 100px 0px;
    margin: 50px 0px;
    background-color: #f7f7f7;
    text-align: center;
`;

export const MyCustomService = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    border-top: 1px solid #eee;
`;



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
        width:30%;        
        cursor:pointer;
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
