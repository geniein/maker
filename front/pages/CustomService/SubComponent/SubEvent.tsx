import axios from 'axios';
import React, { FC, useCallback, useImperativeHandle, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { Container, CSMenu, CSTop, NoticeInner, NoticeTable, Paging, GoListBtn, NoticeWrap } from '../styles'
import { forwardRef } from 'react';

interface Props{
    pageState: boolean;
}

const SubEvent = forwardRef((props, ref) => {  
    const history = useHistory();
    const [innerValue, setInnerValue] = useState<any>(undefined);

    const onClickEvent = useCallback((id:number)=>{
        axios.get(`/api/notices/event/${id}`).then((res)=>{                        
            setInnerValue(res.data[0]);            
        })
    },[innerValue]);

    useImperativeHandle(ref, () => ({        
        onClickEvent                
      }));   
    if(innerValue == undefined) return(<div>Processing</div>)
    return (
        <Container>
                <div className='title'>EVENT <span>커넥팅 이벤트</span></div>
                <NoticeInner>
                        <NoticeTable>
                            <tbody>
                                <tr>
                                    <td className='notice_sub'>제목</td>
                                    <td className='notice_title'>{innerValue?.title}</td>                         
                                </tr>
                                <tr>
                                    <td className='notice_sub'>작성자</td>
                                    <td className='notice_title'>{innerValue?.author}</td>                         
                                </tr>
                            </tbody>                        
                        </NoticeTable>
                        <div className='notice_view' dangerouslySetInnerHTML={{__html:innerValue?.content}}>                            
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <GoListBtn onClick={()=>history.push('/workspace/event')}>목록</GoListBtn>
                        </div>                        
                    </NoticeInner>                         
        </Container> 
    )
});

export default SubEvent
