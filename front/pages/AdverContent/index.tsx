import Card from '@components/Card'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ACContainer, ACMenu, ACTop } from './styles'

const AdverContent = () => {
    const [currPage, setCurrPage] = useState('ALL');
    const [adList, setAdList] = useState<any>(undefined);

    const location = useLocation<any>(); //location    

    if(location?.state !== undefined){                
        setCurrPage(location.state.currPage);
        delete location.state;
    }

    useEffect(() => {
        axios.get(`/api/item-contents`).then((res)=>{
            setAdList(res.data);
        })
        
    }, [currPage])
    if(adList !== undefined) console.log(adList);    
    return (
        <div>
            <Header/>
            <TopMenu/> 
            <ACTop>
                <p>
                    커네팅의 이야기가 영상으로                    
                </p>
            </ACTop>
            <ACMenu>                
                <ul>
                    <li >
                        전체보기                        
                    </li>
                    <li >
                        매장홍보
                    </li>
                    <li >
                        기업홍보
                    </li>
                    <li >
                        자기PR
                    </li>
                    <li >
                        포트폴리오
                    </li>
                </ul>
            </ACMenu>
            {adList && <ACContainer>
                {adList?.map((val:any, idx:number) =>{                    
                        return ( <li key={idx}>
                            <Card key={val.id} id={val.uk} thumbnail={val.thumbnail} title={val.title} hashTag={val.hashTag} price={val.price} from={'content'}/>
                        </li>
                        )
                    })} 
            </ACContainer>            
            }
            <Footer/>
        </div>
    )
}

export default AdverContent
