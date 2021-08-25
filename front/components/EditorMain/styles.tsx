import styled from '@emotion/styled';

export const EditorWrap = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: 'Noto_R';
    font-weight: normal;
    box-sizing: border-box;
`;

export const EditorLeft = styled.div`
    position: relative;
    z-index: 2;
    float: left;
    width: 54%;
    height: 530px;
    padding: 0;
    margin-right: 2%;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #ddd;
`;

export const EditorRight = styled.div`
    position: relative;
    z-index: 2;
    width: 44%;
    float: left;
    right: 0;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ddd;
`;