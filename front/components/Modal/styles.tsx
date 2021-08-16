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
        margin: 0 auto;
        height: 295px;
    }
    ul{
        list-style: none;
    }
`;