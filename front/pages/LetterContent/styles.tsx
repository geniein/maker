import styled from '@emotion/styled'
import { responsiveWidth } from '@utils/responsive';

export const LCTop = styled.div`    
    width:100%;
    height:200px;
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);    
    position: relative;    
    p {
        position:absolute;
        top:30%;        
        width:100%;
        text-align:center;
        font-weight:bold;
        font-size: 12px;
        letter-spacing: 3px;
    }
`;

export const LCMenu = styled.div`
    border-bottom: 1px solid #eaeaea;
    height: 70px;
    margin-bottom: 20px;
    ul{
        display:inline-flex;
        justify-content:center;
        flex-direction:row;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        list-style: none;
    }
    li{
        float: left;
        height: 70px;
        line-height: 70px;
        width: 150px;
        cursor: pointer;
        opacity:1;
        &:hover{
            color: #e1b47b;
            border-bottom: 3px solid #e1b47b;
        }
    }
    pick_line {
        border-top: 1px solid rgb(255, 200, 99);
        width: 150px;
        position: relative;        
    }   
`;    

export const LCContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    width: 100%;
    margin: 0 auto;
    overflow-x: auto; // 👈 중요
    scroll-behavior: smooth; // 중요. 부드럽게 움직이게 하려고.
    ${responsiveWidth};
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

export const GoListBtn = styled.div`
    color: #fff;
    cursor: pointer;
    background: #eac684;
    margin: 50px 20px 30px 20px;
    border: 0px;
    width: 250px;
    height: 60px;            
    border-radius: 2px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;