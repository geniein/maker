import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const TopWrap = styled.nav`        
    width: 100%;
    height: 40px;  
    border-bottom: 1px solid;
    position: relative;   
`;

export const TopContainer = styled.div`    
    margin: 0 auto;
    width: 100%;
    height: 40px;  
    border-bottom: 1px solid;
    position: relative;  
    ${responsiveWidth};    
`;

export const TopMenuUl = styled.ul`
    float: left;    
    margin: 10px 0px 0px 10px;
    padding: 0px;
    color: #848484;
    list-style:none; 
`;

export const TopMenuLi = styled.li`
    float: left;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
    ul {
        position: absolute;
        top: 20px;
        left: 0;
        width: 476px;
        z-index: 1;
        background-color: #fff;
        display: none;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 5px;        

        li {
            display: inline-block;
            line-height: initial;    
        }
        
        li:nth-of-type(1){
            width: 110px;
            float: left;
                 
            p{
                line-height: initial;
                font-size: 13px;
                margin-top:20px;
                margin-bottom: 10px;
                margin-left: 10px;
                cursor:pointer;
                &:hover {
                    font-weight: bold;
                    color: blue;
                    transition: 0.5s;
                }
            }
        }
        
        li:nth-of-type(2){
            width: 360px;
            float: right;
            line-height: initial;
            img {
                display: inline-block;
            }
        }
    }  
    
    &:hover { 
        ul {
            display: inline-block;
        }
    }
    `;