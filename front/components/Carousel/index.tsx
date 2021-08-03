
import React, { CSSProperties, FC, useCallback, useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import { ImageSlide, NavBox, SlideBox, SlideContent, SlideList, ButtonPrev, ButtonNext } from './styles';

interface Props {
    images: string[];
    stlyes: CSSProperties;
}

const Carousel:FC<Props> = ({images , stlyes}) => {
    const [currNo, setCurrNo] = useState(0);
    
    const onChangeImage = useCallback((index:any) => {        
        if (index < 0) index = images.length -1
        else if (index >= images.length) index = 0;       
        setCurrNo(index);
      },[currNo]);
      
    return (         
        <ImageSlide style={stlyes}>
            {/* <NavBox>
            <span>{currNo + 1}</span>
            <span>/</span>
            <span>{images && images.length}</span>            
            </NavBox> */}
            <SlideBox>
                <SlideList style= {{                    
                        transform: `translate3d(
                          $1048px, 0px, 0px`,                      
                }}>
                    {images?.map((image, no) => {
                        if(no === currNo){
                            return (<SlideContent key={no}>
                            <picture>
                                <img src={image} style={stlyes}></img>
                                <div className='circle_wrap'>
                                    {images?.map((image, no)=>{
                                        return(
                                            <div className='circle' key={no} onClick={()=>onChangeImage(no)}></div>                                    
                                        )
                                    })}                                    
                                </div>
                            </picture>
                            </SlideContent>)
                        }                        
                    })}                    
                </SlideList>
                <ButtonPrev onClick={() => onChangeImage(currNo-1)}>
                        <FaIcons.FaChevronLeft/>
                    </ButtonPrev>
                <ButtonNext onClick={() => onChangeImage(currNo + 1)}>
                    <FaIcons.FaChevronRight/>
                </ButtonNext>
            </SlideBox>
        </ImageSlide>
    )
}

export default Carousel
