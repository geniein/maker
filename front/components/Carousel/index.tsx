
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import React, { CSSProperties, FC, useCallback, useEffect, useState } from 'react'
import { ImageSlide, NavBox, SlideBox, SlideContent, SlideList, ButtonPrev, ButtonNext } from './styles';

interface Props {
    images: string[];
    stlyes: CSSProperties;
    autoplay?: boolean;
}

const Carousel:FC<Props> = ({images , stlyes, autoplay}) => {
    const [currNo, setCurrNo] = useState(0);
    
    const onChangeImage = useCallback((index:any) => {        
        if (index < 0) index = images.length -1
        else if (index >= images.length) index = 0;       
        setCurrNo(index);
      },[currNo]);
      
        
    let carouselCount = 1;    
    const autoPlay = setInterval(()=>{                 
            if(carouselCount>3){
                carouselCount = 0;
            }
            let carousel = document.getElementById('radio'+carouselCount) as HTMLInputElement;
            carousel.checked = true;
            carouselCount++;        
        },5000);        
     
    useEffect(() => {         
         return () => {
             console.log('autoclear');
            clearInterval(autoPlay);
         }
     }, []);


    if(autoplay) {
        console.log('autostart');      
        autoPlay;
    }

    return (         
        <ImageSlide style={stlyes}>
            {/* <NavBox>
            <span>{currNo + 1}</span>
            <span>/</span>
            <span>{images && images.length}</span>            
            </NavBox> */}
            <SlideBox> 
                {/* slider */}
                <SlideList > 
                    {/* slides */}
                    {images?.map((image, idx) => {
                        if(idx === 0){
                            return (
                                <input key={idx} type='radio' id={`radio${idx}`}  name='radio' style={{display:'none'}}/>
                            )                                                        
                        } else {
                            return (
                                <input key={idx} type='radio' id={`radio${idx}`}  name='radio' style={{display:'none'}}/>
                            )                                                            
                        }                       
                    })}
                    
                    {images?.map((image, idx) => {
                         if(idx === 0){
                            return (                                                           
                                <SlideContent key={idx} className='first'> 
                                    <img src={image}></img>                                                                                               
                                </SlideContent>
                                )
                            } else {
                                return (<SlideContent key={idx}>                                                                    
                                            <img src={image}></img>                                                                   
                                    </SlideContent>)
                            }                       
                    })}                    
                    <div className='navigation-auto'>
                    {images?.map((image, idx) => {
                        return (<label key={idx} className={`auto-btn${idx}`}></label>)
                    })}
                    </div>                   
                </SlideList>
                <div className='navigation-manual'>
                    {images?.map((image, idx) => {
                        return (<label key={idx} htmlFor={`radio${idx}`} className='manual-btn' onClick={()=>carouselCount= idx + 1}></label>)
                    })}
                </div>
                {/* <ButtonPrev onClick={() => onChangeImage(currNo-1)}>
                        <ChevronLeft fontSize='large' />
                </ButtonPrev>
                <ButtonNext onClick={() => onChangeImage(currNo + 1)}>
                    <ChevronRight fontSize='large'/>
                </ButtonNext> */}
            </SlideBox>
        </ImageSlide>
    )
}

export default React.memo(Carousel);
