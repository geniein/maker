import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const FooterWrap = styled.footer`           
    width: 100%;
    background-color: #3a3a3a;    
    color: #dadada;
`;

export const FooterContainer = styled.div`    
    text-align: left;    
    margin: 0 auto;
    width: 100%;
    ${responsiveWidth};
`;

export const FooterTop = styled.ul`
    list-style: none;
    display: inline-block;
    width: 100%;
    margin: 0 auto;
    padding-top: 30px;
    
    li {
        float: left;
        text-align: left;
        width: 25%;
    }

    .footer_top_l {
        list-style: none;
        p {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
        .footer_title {
            font-size: 25px;
            color: #fff;
            margin-left: 0px;
            letter-spacing: 2px;
            text-align: left;
            font-family: 'noto_b';
    
            .font {
                color: #dcdcdc;
                font-size: 13px;
                letter-spacing: 0;
            }
        }
        .cs_title .cs_number {
            color: #fff;
            margin: 10px 0px;
            font-size: 17px;
            font-family: 'noto_l';
        }
    }
    
    .footer_top_r {
        padding-top: 60px;

        .cs_title {
            font-weight: bold;
            color: #fff;
            letter-spacing: 1px;
            font-size: 25px;
        }

        .cs_number {
            font-weight: bold;
            color: #fff;
            font-size: 19px;
            margin: 10px 0px;
            letter-spacing: 2px;
        }

        .time {
            color: #fff;
            margin: 10px 0px;
            font-family: 'noto_l';
        }
        .lunch {
            color: #fff;
            margin: 10px 0px;
            font-family: 'noto_l';
        }
        .holiday {
            color: #c5c5c5;
            margin: 10px 0px;
            font-family: 'noto_m';
        }
    }

    .footer_top_c {
        text-align: left;
        float: right;

        p {
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: left;
            width: 250px;
            margin: 0;
        }
        .btn_wrap {
            list-style: none;
            width: 100px;
            display: inline-block;
            text-align: l;
            
            li {
                width: 110px;
                display: inline-block;
                color: #fff;
                margin: 5px;
                border: 1px solid #8e8e8e;
                padding: 10px 15px;
                border-radius: 15px;
                
                &:hover {
                    background-color: #fff;
                    color: #636363;
                }
            }        
        }

        .sns_wrap {
            text-align: center;
            margin-bottom: 30px;

            li {
                display: inline-block;
                margin: 0 5px;
            }
        }
    }
`;

export const FooterMid = styled.ul`
    list-style: none;
    width: 100%;
    margin: 20px 0;
    text-align: left;

    li {
        display: inline-block;
        color: #ccc;
        padding-right: 10px;
        font-size: 12px;
    }
`;

export const FooterBot = styled.ul`
    list-style: none;
    text-align: left;
    width: 100%;
    margin: 0;

    li {
        padding: 0 2px;
        display: inline-block;
        font-size: 12px;
        font-family: 'noto_r';
        color: #c5c5c5;
    }
`;