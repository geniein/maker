import styled from '@emotion/styled';
import { responsiveWidth } from '@utils/responsive';

export const NoticeWrap = styled.ul`
    width: 100%;
    height: 54px;        
    margin: 0 auto;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;   
    `;

export const NoticeContainer = styled.ul`
    width: 100%;
    height: 54px;
    list-style: none;    
    margin: 0 auto;
    ${responsiveWidth};
    `;
export const NoticeSub = styled.li`
    color: #eac784;
    width: 10%
    letter-spacing: 0.8px;
    padding-right: 10px;
    font-size: 13px;
    border-right: 1px solid #ccc;
    height: 15px;
    line-height: 15px;
    margin: 20px 0px;
    float:left;
    `;

export const NoticeContent = styled.li`    
    width: 60%;
    height: 40px;
    margin: 7px 10px 0px;
    line-height: 40px;           
    float:left;
    `;

export const NoticeTip = styled.li`
    width: 15%;
    height: 40px;
    margin: 7px 0px;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #ddd; 
    border-right: 1px solid #ddd;
    float:right;
    `;

export const SubTitleCon = styled.ul`
    list-style: none;
    width: 100%;
    height:160px;    
    padding: 40px 0px;
    text-align: center;
    display:flex;
    justify-content:center;
    margin: 1px auto;    
    `;

export const SubTitleList = styled.p`
    font-size: 22px;
    width:100%;            
    color: #5d5d5d;
    font-family: 'noto_b';
    align: center;
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