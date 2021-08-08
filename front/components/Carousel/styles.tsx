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
  // width: ${props => props.style?.width};
  height: 100vh;
  margin: 0;
  padding: 0;
  // padding-bottom: 30px;
  display:flex;
  justify-content:center;
  align-items:center; 
`;

export const SlideBox = styled.div`  
  width: 100%;
  height: 500px;  
  border-radius:10px;
  overflow: hidden;

  .navigation-manual{
    position:absolute;
    width: 100%;
    margin-top:-40px;
    display: flex;
    justify-content:center;
  }
  .manual-btn{
    border: 2px solid #ffffff;
    padding: 5px;
    border-radius: 10px;
    cursor:pointer;
    transition: 1s;
    &:hover{
      background-color:#ffffff;
      transition 1s;      
    }
  }  
  .manual-btn:not(:last-child){
    margin-right:40px;
  }      

  #radio0:checked ~ .first{
    margin-left: 0;
  }
  
  #radio1:checked ~ .first{
    margin-left: -20%;
  }

  #radio2:checked ~ .first{
    margin-left:-40%;
  }
  
  #radio3:checked ~ .first{
    margin-left: -60%;
  }
`;

export const SlideList = styled.div` 
  width: 500%;
  height: 500px; 
  display:flex;  
    
  .navigation-auto{

  }  
`;

export const SlideContent = styled.div`    
    width:20%;    
    transition:2s;  
    img{      
      width:100%;      
      height:500px;       
    }
`;

export const ButtonNext = styled.div`
  position: absolute;
  top: 225px;
  width: 40px;
  height: 45px;
  padding-top: 5px;
  background-color: #333;
  opacity:0.5;
  font-size: 40px;
  font-weight: 100;
  vertical-align: middle;
  color: #eeeeee; 
  right: 0px;
  &:hover{
    background-color: #333;
    opacity: 1;
  }  
`;

export const ButtonPrev = styled.div`
  position: absolute;
  top: 225px;
  width: 40px;
  height: 45px;
  padding-top: 5px;
  background-color: #333;
  opacity:0.5;
  font-size: 40px;
  font-weight: 100;
  vertical-align: middle;
  color: #eeeeee;  
  left: 0px; 
  &:hover{
    background-color: #333;
    opacity: 1;
  }   
`;
