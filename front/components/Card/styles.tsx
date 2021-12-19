import styled from "@emotion/styled";

const StyledCard = styled.div`
  border-radius: 0.4rem;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);    
  cursor: pointer;
  transition: 0.2s;

  /* 카드의 크기 */
  width: 270px;
  height: 300px;

  .card-image-wrapper {
    height: 150px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    overflow: hidden;
  }

  &:hover {
    transform: translateY(-0.7%); // 위로 살짝 들리게
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

    .card-img {
      transition: transform 0.5s ease;
      height: 150px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
      transform: scale(1.25);
    }
  }

  .card-img {
    display: block;
    width: 100%;
    height: 150px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    object-fit: cover;
  }

  /* 이하 제목, 닉네임, 설명 등  */
  .card-content {
    padding: 1rem;
    overflow: hidden;

    /* 제목 */
    .card-header {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;

      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* 글쓴이 */
    .card-text {
      margin-bottom: 0.5rem;
      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* 글 */
    .card-price {
      font-size: 1rem;
      line-height: 1.3;
      /* letter-spacing: 0.1rem; */

      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      /* overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; */
    }
  }
`;

export default StyledCard;