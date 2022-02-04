import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { MPWrap, MyBox, MyInfo, MyInfoContainer, MyOptionList, MyDetail } from './styles'
import MyContent from './SubContent/MyContent'
import MyCustom from './SubContent/MyCustom'
import MyDelivery from './SubContent/MyDelivery'
import MyCart from './SubContent/MyCart'
import useSWR from 'swr'
import fetcher from '@utils/fetcher'

const Mypage = () => {
    const [currPage, setCurrPage] = useState('mycontent');
    const location = useLocation<any>();

    if(location?.state !== undefined){         
        setCurrPage(location.state.currPage);
        delete location.state;
    }
    const { data: userData } = useSWR('/api/users', fetcher);
    
    if(userData == undefined) return(<div>Processing...</div>)
    return (
        <div>
            <MPWrap>
                <MyInfo>
                    <p className='title'>My Page <span> 마이페이지</span></p>
                    <MyInfoContainer>
                        <MyBox>
                            <p className='my_first'>환영합니다.</p>
                            <p className='my_second'>{userData.userName}</p>
                            <p className='my_third'>{userData.phoneNumber ?? ''}</p>
                            <p className='my_forth'>{userData.email ?? ''}</p>
                        </MyBox>
                        <MyOptionList>
                            <ul>
                                <li onClick={()=>setCurrPage('MYCONTENT')}>내영상/사진보기</li>
                                <li onClick={()=>setCurrPage('MYCUSTOM')}>1:1문의하기/내역</li>
                            </ul>
                            <ul>
                                <li onClick={()=>setCurrPage('MYCART')}>장바구니</li>
                                <li onClick={()=>setCurrPage('MYDELIVERY')}>배송조회</li>
                            </ul>
                            <ul>
                                <li>내 모바일초대장</li>
                                <li>구매내역</li>
                            </ul>
                        </MyOptionList>
                    </MyInfoContainer>
                    <MyDetail>                                        
                    {currPage === 'MYCONTENT' &&<MyContent/>}                    
                    {currPage === 'MYCUSTOM' &&<MyCustom/>}
                    {currPage === 'MYDELIVERY' &&<MyDelivery/>}
                    {currPage === 'MYCART' &&<MyCart/>}
                    </MyDetail>
                </MyInfo> 
            </MPWrap>            
        </div>
    )
}

export default Mypage
