import React from 'react';
import {NoticeCon, NoticeContent, NoticeSub, NoticeTip} from './styles';

const Notice = ()=> {
    return (
        <NoticeCon>
            <NoticeSub>NOTICE</NoticeSub>
            <NoticeContent>+ Maker 업그레이드 되었습니다.</NoticeContent>
            <NoticeTip>Tip!</NoticeTip>
            <NoticeTip>노하우!</NoticeTip>            
        </NoticeCon>
    )
}

export default Notice
