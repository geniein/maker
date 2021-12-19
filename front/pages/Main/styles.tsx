import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const MainWrap = styled.div`    
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ececec;        
`;

export const MainContainer = styled.div`    
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;    
    ${responsiveWidth};
`;

export const MainMenu = styled.ul`    
    width: 100%;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;
    position: relative;
    list-style: none;
    display:inline-flex;
    justify-content:center;
    ${responsiveWidth};
    li{
      width: 226px;
      height: 50px;
      cursor: pointer;
      padding: 14.5px 6px;
      color: #3f3f3f;      
      text-align: center;
      font-size: 14px;      
      &:hover{
        color: #e1b47b;
        border-bottom: 3px solid #e1b47b;
      }
    }
`;

export const Img = styled.img`
    margin: 0 auto;    
    height: 40px;    
`;

export const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    width: 100%;
    padding: 20px;
    overflow-x: auto; // 👈 중요
    scroll-behavior: smooth; // 중요. 부드럽게 움직이게 하려고.

  .card-item {
    flex-shrink: 0; // 👈 중요
    margin: 0 10px 0 0; // 각 아이템간의 간격
  }
  /* 스크롤바 속성 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  button {
    position: absolute;
    z-index: 10;
  }

  .left-button {
    left: 35px;
  }

  .right-button {
    right: 35px;
  }
`;