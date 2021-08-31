import styled from '@emotion/styled';

const filledStyle = `
    background-color: black;
    color: white;
`;

const alignCenter = `
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DragDropWrap = styled.div`
    width: 100%;
    height: 100vh;    
    ${alignCenter};
    .File {
        width: 400px;
        height: 200px;
        border: 2px solid black;
        border-radius: 10px;

        ${alignCenter};
        cursor: pointer;
        transition: 0.12s ease-in;

        &-Dragging {
            ${filledStyle};
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
`;

// DragDrop.scss
// const @mixin filledStyle() {
//     background-color: black;
//     color: white;
//   }
  
//   @mixin alignCenter() {
//     display: flex;
//     display: -webkit-flex;
//     flex-direction: column;
//     -ms-flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }