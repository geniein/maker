import Card from '@components/Card'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ACContainer, ACMenu, ACTop, ACWrap } from './styles'

const AdverContent = () => {
    const [currPage, setCurrPage] = useState('ALL');
    const [adList, setAdList] = useState<any>(undefined);

    const location = useLocation<any>(); //location    

    if(location?.state !== undefined){         
        setCurrPage(location.state.currPage);
        delete location.state;
    }

    useEffect(() => {        
        axios.get(`/api/item-contents/list/adver/${currPage}`).then((res)=>{
            setAdList(res.data);
        })        
    }, [currPage]);

    const onClickMenu = useCallback((category : string) =>{
        axios.get(`/api/item-contents/list/adver/${category}`)
        .then((res)=>{            
            setAdList(res.data)
        }); 
    },[adList]); 

    if(adList !== undefined) console.log(adList);    

    return (
        <div>            
            <ACWrap>
                <ACTop>
                    <p>
                        커네팅의 이야기가 영상으로                    
                    </p>
                </ACTop>
                <ACMenu>                
                    <ul>
                        <li onClick={() => onClickMenu('ALL')}>
                            전체보기                        
                        </li>
                        <li onClick={() => onClickMenu('MARKET')}>
                            매장홍보
                        </li>
                        <li onClick={() => onClickMenu('COMPANY')}>
                            기업홍보
                        </li>
                        <li onClick={() => onClickMenu('SELF')}>
                            자기PR
                        </li>
                        <li >
                            포트폴리오
                        </li>
                    </ul>
                </ACMenu>
                {adList && <ACContainer>
                    {adList?.map((val:any, idx:number) =>{                    
                            return ( 
                                <Card key={idx} id={val.contentId} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'content'}/>                            
                            )
                        })} 
                </ACContainer>            
                }
            </ACWrap>             
        </div>
    )
}

export default AdverContent
