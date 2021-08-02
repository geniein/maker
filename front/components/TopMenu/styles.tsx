import styled from '@emotion/styled';

export const Container = styled.div`
    padding-top:70px;
    margin: 0 auto;
    width: 100%;
    height: 110px;  
    border-bottom: 1px solid;
    position: relative;
    .top_menu {
        width: 1200px;
        margin: 0 auto;
        height: 60px;
        list-style: none;
        line-height: 60px;
    }
`;

export const TopMenuUl = styled.ul`
    float: left;    
    margin: 10px 0px 0px 10px;
    color: #848484;
    list-style:none; 
`;

export const TopMenuLi = styled.li`
    float: left;
    margin-left: 34px;
    position: relative;
    cursor: pointer;
    ul {
        position: absolute;
        top: 20px;
        left: 0;
        width: 476px;
        z-index: 1001;
        background-color: #fff;
        display: none;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 5px;        
        
        &:hover {
            display: inline-block;
        }

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

export const TopMenuWrap = styled.div`
    background-position: 50% 50%;
    background-repeat: no-repeat;
    height: 400px;

    .top_menu {
        width: 1200px;
        margin: 0 auto;
        height: 60px;
        list-style: none;
        line-height: 60px;
    }
`;