import React, { CSSProperties, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { render } from 'react-dom';
import { useHistory } from 'react-router'
import { HamburgerCenter, HamburgerMenuItem,HamburgerMenuItemList, HamburgerWrap } from './styles'

interface Props{
    isDisplay:boolean;
    setIsDisplay:Dispatch<SetStateAction<boolean>>;
}

const Hamburger:FC<Props> = ({isDisplay, setIsDisplay})=> {
    const history = useHistory();
    const clickRef = useRef<any>(null);    

    const handleCloseHamburger = (e:any) =>{        
        if(clickRef.current && !clickRef?.current?.contains(e.target)){                                    
            setIsDisplay(false);
        }
    }

    const onClickPage = (pagePath:string,pageState?:string) =>{        
        setIsDisplay(false);
        history.push({
            pathname: `/workspace/${pagePath}`,
            state:{currPage:pageState}
        })        
    }

    return (
        <HamburgerWrap isDisplay={isDisplay} onClick={handleCloseHamburger} >
            <HamburgerCenter >
                <div className='menu_list' ref={clickRef}>
                    <HamburgerMenuItem>
                        광고영상
                    <ul>
                        <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/adver','ALL')}>
                        전체보기
                        </HamburgerMenuItemList>
                        <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/adver','MARKET')}>
                        매장홍보
                        </HamburgerMenuItemList>
                        <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/adver','COMPANY')}> 
                        기업홍보
                        </HamburgerMenuItemList>
                        <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/adver','SELF')}>
                            자기PR
                        </HamburgerMenuItemList>
                        <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/adver','')}> 
                            포토폴리오
                        </HamburgerMenuItemList>
                    </ul>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        영상편지
                        <ul>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/letter','ALL')}>
                            전체보기
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/letter','PROPOSE')}>
                            프로포즈
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/letter','WEDDING')}>
                            웨딩스토리
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/letter','')}>
                                성장스토리
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/letter','')}>
                                가족스토리
                            </HamburgerMenuItemList>
                        </ul>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        모바일초대장
                        <ul>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/invite','ALL')}>
                                전체보기
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/invite','')}>
                                개업일 초대
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/invite','')}>
                                기념일 초대
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/invite','')}>
                                웨딩초대
                            </HamburgerMenuItemList>
                            <HamburgerMenuItemList onClick={()=>onClickPage('contentlist/invite','')}>
                                감사인사
                            </HamburgerMenuItemList>
                        </ul>
                    </HamburgerMenuItem>                          
                </div>
            </HamburgerCenter>
        </HamburgerWrap>        
    )
}

export default Hamburger
