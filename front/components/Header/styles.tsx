import styled from '@emotion/styled';
import {responsiveWidth} from '@utils/responsive'

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 70px;  
    border-bottom: 1px solid;
    position: fixed;
    z-index: 1000;
    background-color: #ffffff;

    ${responsiveWidth};
    
    ul {
        float: right;    
        margin: 30px 0px 0px 20px;
        color: #848484;
    }

    li {
        display: inline;
        padding-right: 20px;
        text-align: -webkit-match-parent;
        list-style:none; 
        cursor:pointer;

        &:hover{            
        }
    }
`;

export const HeaderLogo = styled.img`
    margin: 0 auto;    
    height: 70px;    
`;