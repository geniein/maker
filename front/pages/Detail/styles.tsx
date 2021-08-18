import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const DetailWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const DetailTop = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;        
    width: 100%;
    margin-top: 70px;

    .detail_src{        
        width:50%;        
        display: inline-flex;
        justify-content:center;
        align-items:center; 
        text-align:center;
        margin:0 20px;    
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }  
        video{
            width: 100%;
            height: 100%;
            object-fit: contain;            
        }         
    }
    .detail_src_close{
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
        display: none;
        -webkit-transition: -webkit-transform .8s ease-in-out;
        transition: transform .8s ease-in-out;
        cursor: pointer;
    }
    .detail_info{
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        margin-right:20px; 
        width: 35%;
        height: auto;        
        text-align: left;
    }
    .detail_title {
        font-size: 20px; 
        color: #383838;        
        margin-bottom: 10px;
    }
    .detail_share {        
        float: right;
    }
    .detail_sub_price{
        font-size: 20px;
        .discount_line{
            text-decoration: line-through;
            font-size: 20px;
            margin-left: 12px;
        }
    }
    .detail_tag{
        color: #272727;
        margin-bottom: 10px;
        font-weight:bold;
    }
    .detail_options{
        list-style: none;        
        padding: 10px 0px 0;
        border-top: 1px solid #ccc;
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin-top: 10px;
        
        li{
            display: inline-flex;
            justify-content: flex-start;
            flex-direction:row;
            text-align: left;
            margin-top: 10px;
            width: 90%;
        }
    }
    .detail_sub_title{    
        width: 100px;
        height: 35px;
        line-height: 35px;
        background: #ffffff;
        color: #525252;        
        border-radius: 5px;
    }
    .detail_sub_select{
        border-radius: 3px;
        width: 80%;
        height: 40px;
        border: 1px solid #ccc;
        font-family: inherit;        
        background-size: 15px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-left: 10px;
    }
    .detail_sub_info{
        font-size: 12px;
        font-weight: normal;
        margin-bottom: 0;
        margin-top: -5px;
        text-align: center;
        padding: 5px 0px;
        color: #888;
    }
    .detail_price{
        text-align: center;
        padding: 5px 0px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        font-size: 20px;
        font-weight: bold;        
        line-height: 40px;
    }    
    `;

    export const DetailBtnWrap = styled.div`
        display: flex;
        justify-content:center;
        align-items: center;
        .detail_btn{
            display: inline-flex;
            justify-content:center;
            align-items: center;
            cursor: pointer;            
            margin: 5px 4px 5px 0px;
            width: 200px;
            height: 45px;
            border: solid;        
        }
    `;

    export const DetailMenu = styled.div`
    border-top: 1px solid #eaeaea;
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


export const VideoWrap = styled.div`
    
`;