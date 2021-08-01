import styled from '@emotion/styled';

export const DetailTop = styled.div`
    display: inline-block;
    width: 1200px;
    margin-top: 70px;

    .detail_src{
        position: relative;
        width: 644px;
        height: 362px;
        display: inline-flex;        
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
        width: 495px;
        height: auto;
        float: right;
        text-align: left;
    }
    .detail_title {
        font-size: 20px; 
        color: #383838;
        display: inline-block;
        margin-bottom: 10px;
    }
    .detail_share {
        display: inline-block;
        float: right;
    }
    .detail_sub_price{
        font-size: 14px;
        .discount_line{
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 12px;
        }
    }
    .detail_tag{
        color: #272727;
        margin-bottom: 10px;
    }
    .detail_options{
        list-style: none;
        padding: 10px 0px 0;
        border-top: 1px solid #ccc;
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin-top: 10px;
        
        li{
            text-align: left;
            margin-top: 10px;
        }
    }
    .detail_sub_title{
        display: inline-block;
        width: 100px;
        height: 35px;
        line-height: 35px;
        background: #ffffff;
        color: #525252;
        text-align: center;
        border-radius: 5px;
    }
    .detail_sub_select{
        border-radius: 3px;
        width: 380px;
        height: 40px;
        border: 1px solid #ccc;
        font-family: inherit;
        background: url(/img/arrow.png) no-repeat 95% 50%;
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
        font-size: 13px;
        height: 32px;
        line-height: 32px;
    }
    .detail_btn{
        cursor: pointer;
        float: left;
        margin: 5px 4px 5px 0px;
        height: 45px;
    }
    `;