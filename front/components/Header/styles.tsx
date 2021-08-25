import styled from '@emotion/styled';
import {responsiveWidth} from '@utils/responsive'

export const HeaderWrap = styled.header`
    margin: 0 auto;
    width: 100%;
    height: 70px;  
    border-bottom: 1px solid;
    position: fixed;
    z-index: 1002;
    background-color: #ffffff;
`;

export const HeaderContainer = styled.div`    
    margin: 0 auto;
    width: 100%;
    height: 70px;  
    border-bottom: 1px solid;
    position: relative;    
    ul {
        float: right;
        height: 30px;    
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
    ${responsiveWidth};
`;

export const HeaderLogo = styled.img`
    margin: 0 auto;    
    height: 70px;    
`;
export const AvatarRound = styled.div`    
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    border-radius: 50%;    
    background-color: gray;
    flex-shrink: 0;
    user-select: none;
    color:#fff;       
`;

// export const HeaderWrapNew = styled.header`
//     top: 0;
//     left: 0;
//     z-index:999999;
//     width: 100%;
//     display: flex;
//     justify-content: space- between;
//     align-items;center;
//     background: #23252B;
//     box-shadow: 0 5px 25px rgb(0 0 0 / 20%);
//     padding: 0 100px;
//     transition: 0.6s;    
// `;

// export const NavigationContainer = styled.div`    
//         position: relative;
//         line-height: 75px;
//         .menu{
//             position: relative;
//             display: flex;
//             jusify-content: center;
//             list-style: none;
//             user-select:none;
//         }
// `;

// export const MenuItem = styled.li`
//     color: #ffffff;
//     font-size: 1em;
//     text-decoration: none;
//     margin: 20px;
//     padding 25px 0;
//     cursor:pointer;
//     &:hover{
//         color: #469DFF;
//         tansition: 0.3s;
//         .submenu{
//             pointer-events: all;
//             transform: transltateY(20px);
//             opacity: 1;
//         }
//     } 
//     .submenu{
//         position: absolute;
//         background: #23252B;
//         top: 74px;
//         line-height: 40px;
//         list-style: none;
//         border-radius: 0 0 8px 8px;
//         padding: 0;
//         box-shadow: 0 5px 25px rgb(0 0 0 /20%);
//         trasition : 0.3s;
//         opacity: 0;
//         pointer-events: none;
//         transform: translateY(20px);        
//     }
// `;

// export const SubMenuItem = styled.li`    
//     position: relative;
//     padding: 7px 0;    
//     cursor:pointer;
//     box-shadow: inset 0px -30px 5px -30px rgba(255,255,255,0.2);
    
    
//     &:hover{
//         background: #4080EF;
//         transition: 0.3s;
//     }
//     &:last-child:hover{
//         border-radius: 0 0 8px 8px;
//     }
//     .sublink{
//         color: #fff;
//         font-size: 1em;
//         text-decoration: none;
//         padding: 15px 30px;
//     }
// `;