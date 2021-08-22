import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const AddReviewWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const MyContentList =styled.div`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 80%;
    height: auto;
    margin: 30px auto;
    border-bottom: 1px solid #000;      
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
            width:360px;
            height:200px;
        }
        .item_src{
            width: 500px;
            height: 250px;
            text-align: center;
            padding: 20px;
            padding-bottom: 36px;
        }
        .item_box{
            width: 200px;
            height: 250px;
            text-align: center;
            display:flex;
            align-items: center;           
            padding:0 20px;
            font-weight: bold;           
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
            cursor:pointer;
        }
    }
`;