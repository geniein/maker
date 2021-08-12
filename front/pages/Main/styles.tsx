import styled from '@emotion/styled';

export const Container = styled.div`    
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;    
    margin-top: 1px;     
`;

export const Img = styled.img`
    margin: 0 auto;    
    height: 40px;    
`;

export const Ul = styled.ul`    
    color: #848484;
    list-style: none;
    display: inline-block;
`;

export const Li = styled.li`
    float: left;
    text-align: left;
    width: 25%;
    `;

export const Ptag = styled.li`
    font-size: 25px;
    color: #ffffff;
    margin-left: 0px;
    letter-spacing: 2px;
    text-align: left;
    font-family: 'noto_b';   
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