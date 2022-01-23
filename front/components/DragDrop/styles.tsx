import styled from '@emotion/styled';

const alignCenter = `
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const dropBox = `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;    
`
const filledStyle = `
    background-color: white;
    color: red;    
    ${alignCenter};
    ${dropBox};
`;

export const DragDropWrap = styled.div`
    width: 100%;
    height: 100%;    
    ${alignCenter};
    .File {
        ${dropBox};
        &-Dragging {
            ${dropBox};
            ${alignCenter};
            ${filledStyle};
            transition: 0.12s ease-in;
            cursor: pointer;
            color: #000;
            border: 4px dashed #009578;
            border-radius: 10px;
        }
    }

    .Files {
        margin-top: 1rem;
        & > div {
            width: 300px;
            padding: 8px;
            border: 1px solid black;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
        }
        &-Filter {
            cursor: pointer;
            &:hover {
                opacity: 0.7;
            }
        }
    }

    .drop-zone__thumb {
        width: 150px;
        height: 150px;
        margin: 0 10px;
        border: 1px solid black;
        border-radius: 10px;
        overflow: hidden;
        background-color: #cccccc;
        background-size: cover;
        position: relative;
    }
    drop-zone__thumb::after {
        content: attr(data-label);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 5px 10px;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.75);
        font-size: 14px;
        text-align: center;
    }
`;

export const DropThumb = (element:any) => styled(element)`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #cccccc;
    background-size: cover;
    position: relative;
    
    &:after {
        content: attr(data-label);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 5px 0;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.75);
        font-size: 14px;
        text-align: center;
    }
`