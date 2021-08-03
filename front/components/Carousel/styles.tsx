import styled  from '@emotion/styled';

export const NavBox = styled.div`
  position: relative;
  width: 100%;
  margin: auto;  
  vertical-align: middle;
  text-align: center;
  z-index: 1;  
`;

export const ImageSlide = styled.div`
  position: relative;
  width: ${props => props.style?.width};
  height: auto;
  margin: auto;
  padding-bottom: 30px;  
  span {
    padding: 0 5px;
  }
`;

export const SlideBox = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;

export const SlideList = styled.div` 
  width: 100%;
  transition: all 300ms ease 0s;
  overflow: hidden; 
`;

export const SlideContent = styled.div`
  display: table;
  float: left;
  width: 100%;
  height: auto;

  picture {
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    img {
      width: 100%;      
      height: ${props => props.style?.height};
    }
    .circle_wrap{      
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 5%;      
      display:inline-flex;
      justify-content:center;
      align-items: center;
    }
    .circle{
      width: 1%;
      height: 50%;
      background-color: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
    }
  }  
`;

export const ButtonNext = styled.div`
  position: absolute;
  top: 225px;
  width: 50px;
  height: 50px;
  padding-top: 5px;
  background-color: #333;
  font-size: 40px;
  font-weight: 100;
  vertical-align: middle;
  color: #eeeeee; 
  right: 0px;  
`;

export const ButtonPrev = styled.div`
  position: absolute;
  top: 225px;
  width: 50px;
  height: 50px;
  padding-top: 5px;
  background-color: #333;
  font-size: 40px;
  font-weight: 100;
  vertical-align: middle;
  color: #eeeeee;  
  left: 0px;  
`;


/* .imageSlide {
    position: relative;
    width: 500px;
    margin: auto;
    padding-bottom: 30px;
  
    .navBox {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 14px;
      z-index: 2;
  
      span {
        padding: 0 5px;
      }
    }

    .slideBox {
        position: relative;
        width: 100%;
        margin: auto;
        overflow-x: hidden;
    
        .slideList {
          width: 2800px;
          transition: all 300ms ease 0s;
          overflow: hidden;
    
          .slideContent {
            display: table;
            float: left;
            width: 500px;
            height: 500px;
    
            picture {
              display: table-cell;
              vertical-align: middle;
              text-align: center;
    
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
    
        &:hover .buttonPrev {
          left: 0;
          transition: left 0.5s;
        }
    
        &:hover .buttonNext {
          right: 0;
          transition: right 0.5s;
        }
    
        .buttonPrev,
        .buttonNext {
          position: absolute;
          top: 225px;
          width: 50px;
          height: 50px;
          padding-top: 5px;
          background-color: #333;
          font-size: 40px;
          font-weight: 100;
          vertical-align: middle;
          color: #eeeeee;
        }
        .buttonPrev {
          left: -50px;
        }
        .buttonNext {
          right: -50px;
        }
      }
    
      .paginationBox {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        grid-column-gap: 3px;
    
        picture {
          width: 100%;
    
          img {
            width: 100%;
            cursor: pointer;
          }
        }
      }
    } */