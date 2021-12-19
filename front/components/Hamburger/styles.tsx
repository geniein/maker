import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const HamburgerWrap = styled.div<{isDisplay:boolean;}>`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.93);
    top: 0px;
    padding: 0;
    display: ${(props)=> (props.isDisplay === true ? 'block':' none')};
    z-index: 10000;    
    position: fixed;
`;

export const HamburgerCenter = styled.div`
    width: 100%;
    top: 280px;
    position: absolute;
    z-index: 10001;
    margin: 0 100px;    
    ${responsiveWidth};
    .menu_list{
        width: 100%;
        margin: auto auto;
        height: 295px;                
        display:inline-flex;
        flex-flow: row wrap;
    }  
`;

export const HamburgerMenuItem = styled.div`
    color: #fff;
    width: 150px;  
    ul{
        list-style:none;
    }  
`;

export const HamburgerMenuItemList = styled.li`
    color: #fff;
    width: 150px;
    height: 30px;
    cursor:pointer;
    &:hover{
        font-weight: bolder;
        transition: 0.5s;
    }
`;