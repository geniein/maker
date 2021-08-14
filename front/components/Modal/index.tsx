import React, { CSSProperties, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { render } from 'react-dom';
import { useHistory } from 'react-router'
import { ModalCenter, ModalWrap } from './styles'

interface Props{
    isDisplay:boolean;
    setIsDisplay:Dispatch<SetStateAction<boolean>>;
}

const Modal:FC<Props> = ({isDisplay, setIsDisplay})=> {
    const history = useHistory();
    const clickRef = useRef<any>(null);    

    const handleCloseModal = (e:any) =>{        
        if(clickRef.current && !clickRef?.current?.contains(e.target)){                                    
            setIsDisplay(false);
        }
    }

    return (
        <ModalWrap isDisplay={isDisplay} onClick={handleCloseModal} >
            <ModalCenter >
                <div className='menu_list' ref={clickRef}>
                    <ul>
                        <li style={{
                            float: 'left',
                            width: '185px',
                            height: '295px'
                        }}>
                            <h3>Hello</h3>
                            <ul>
                                <li style={{float: 'left',
                                            width: '185px',
                                            height: '30px',
                                            marginBottom: '7px'}}
                                            onClick={()=>history.push('/workspace/addcontent')}>
                                NewPost</li>
                                <li style={{float: 'left',
                                            width: '185px',
                                            height: '30px',
                                            marginBottom: '7px'}}>
                                NewWolrd</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </ModalCenter>
        </ModalWrap>        
    )
}

export default Modal
