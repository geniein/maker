import Card from '@components/Card'
import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ICContainer, ICMenu, ICTop } from './styles'

const InviteContent = () => {
    const [currPage, setCurrPage] = useState('ALL');
    const [icList, setIcList] = useState<any>(undefined);

    const location = useLocation<any>(); //location    

    if(location?.state !== undefined){                
        setCurrPage(location.state.currPage);
        delete location.state;
    }

    useEffect(() => {
        axios.get(`/api/item-contents`).then((res)=>{
            setIcList(res.data);
        })
        
    }, [currPage])
    if(icList !== undefined) console.log(icList);    
    return (
        <div>
            <ICTop>
                <p>
                    초대장 제작하기
                </p>
            </ICTop>
            <ICMenu>                
                <ul>
                    <li >
                        전체보기
                    </li>
                    <li >
                        개업일초대장                        
                    </li>
                    <li >
                        기념일초대장
                    </li>
                    <li >
                        웨딩초대장
                    </li>
                    <li >
                        감사인사장
                    </li>                    
                </ul>
            </ICMenu>                                            
        </div>
    )
}

export default InviteContent
