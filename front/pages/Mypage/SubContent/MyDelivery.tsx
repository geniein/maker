import React from 'react'
import { MyWrap, MyContentList, MyContentMenu, MyCustomService, MyItem, NoItem } from './styles'

const MyDelivery = () => {
    return (
        <MyWrap>
            <p className='title'>배송조회 <span>helloworld</span></p>                   
            <NoItem>배송중인 아이템이 없습니다.</NoItem>
        </MyWrap>
    )
}

export default MyDelivery
