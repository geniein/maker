import fetcher from '@utils/fetcher';
import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import {NoticeContainer, NoticeContent, NoticeSub, NoticeTip, NoticeWrap} from './styles';

const Notice = ()=> {
    const {data:noticeList} = useSWR(`/api/notices`,fetcher);
    return (
        <NoticeWrap>
            <NoticeContainer>
                <NoticeSub> <Link to='/workspace/customservice' style={{textDecoration:'none', color:'inherit'}}>NOTICE</Link></NoticeSub>
                {noticeList?.map((val:any, idx:number)=>{
                    if(idx != 0) return null;
                    return <NoticeContent key={idx}>
                        <Link to={{
                            pathname: `/workspace/customservice`,
                            state: {
                                currPage: 'NOTICE',
                                notice: idx                            
                            }
                        }} 
                        style={{textDecoration:'none', color:'inherit'}}>
                        + {val.title}
                        </Link>
                        </NoticeContent>
                })}                        
            </NoticeContainer>
        </NoticeWrap>
    )
}

export default Notice
