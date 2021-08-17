import React, { CSSProperties, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { render } from 'react-dom';
import { useHistory } from 'react-router'
import { ModalCenter, ModalMenuItem, ModalWrap } from './styles'

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
                    <ModalMenuItem>
                        광고영상
                    <ul>
                        <li>
                        전체보기
                        </li>
                        <li>
                        매장홍보
                        </li>
                        <li>
                        기업홍보
                        </li>
                        <li>
                            자기PR
                        </li>
                        <li>
                            포토폴리오
                        </li>
                    </ul>
                    </ModalMenuItem>
                    <ModalMenuItem>
                        영상편지
                        <ul>
                            <li>
                            전체보기
                            </li>
                            <li>
                            프로포즈
                            </li>
                            <li>
                            웨딩스토리
                            </li>
                            <li>
                                성장스토리
                            </li>
                            <li>
                                가족스토리
                            </li>
                        </ul>
                    </ModalMenuItem>
                    <ModalMenuItem>
                        모바일초대장
                        <ul>
                            <li>
                                전체보기
                            </li>
                            <li>
                                개업일 초대
                            </li>
                            <li>
                                기념일 초대
                            </li>
                            <li>
                                웨딩초대
                            </li>
                            <li>
                                감사인사
                            </li>
                        </ul>
                    </ModalMenuItem>                          
                </div>
            </ModalCenter>
        </ModalWrap>        
    )
}

export default Modal
