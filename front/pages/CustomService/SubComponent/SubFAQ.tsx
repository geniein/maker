import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, useImperativeHandle, useState } from 'react'
import { useLocation } from 'react-router';
import useSWR from 'swr';
import { Container, CSMenu, CSTop, NoticeInner, NoticeTable, Paging, GoListBtn, NoticeWrap } from '../styles'
import NewPost from '@components/NewPost'
import { forwardRef } from 'react';
import { useEffect } from 'react';

interface Props{
    pageState: boolean;
}

const SubFAQ = forwardRef((props, ref) => {  
    return (
        <Container>
                <div className='title'>FAQ <span>자주 묻는 질문</span></div>                         
        </Container> 
    )
});

export default SubFAQ
