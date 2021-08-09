import fetcher from '@utils/fetcher';
import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import {NoticeCon, NoticeContent, NoticeSub, NoticeTip} from './styles';

const Notice = ()=> {
    const {data:noticeList} = useSWR(`/api/notices`,fetcher);
    return (
        <NoticeCon>
            <NoticeSub> <Link to='/customservice' style={{textDecoration:'none', color:'inherit'}}>NOTICE</Link></NoticeSub>
            {noticeList?.map((val:any, idx:number)=>{
                if(idx != 0) return null;
                return <NoticeContent key={idx}>
                    <Link to={{
                        pathname: `/customservice`,
                        state: {
                            notice: idx                            
                        }
                    }} 
                    style={{textDecoration:'none', color:'inherit'}}>
                    + {val.title}
                    </Link>
                    </NoticeContent>
            })}                        
        </NoticeCon>
    )
}

export default Notice
