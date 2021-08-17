import styled from '@emotion/styled';

export const ModalWrap = styled.div<{isDisplay:boolean;}>`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.93);
    top: 0px;
    padding: 0;
    display: ${(props)=> (props.isDisplay === true ? 'block':' none')};
    z-index: 10000;    
    position: fixed;
`;

export const ModalCenter = styled.div`
    width: 100%;
    top: 320px;
    position: absolute;
    z-index: 10001;    
    
    .menu_list{
        width: 100%;
        margin: auto auto;
        height: 295px;        
        margin: 0 100px;
        display:inline-flex;
    }  
`;

export const ModalMenuItem = styled.div`
    color: #fff;
    width: 150px;  
    ul{
        list-style:none;
    }  
`;

export const ModalMenuItemList = styled.li`
    color: #fff;
    width: 150px;
    height: 30px;
`;