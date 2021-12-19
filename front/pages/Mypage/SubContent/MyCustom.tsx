import React from 'react'
import { MyWrap, MyContentList, MyContentMenu, MyCustomService, MyItem, NoItem } from './styles'

const Mycustom = () => {
    return (
        <MyWrap>
            <p className='title'>1:1문의하기/내역 <span>helloworld</span></p>           
            <MyCustomService>
                <img src='/public/mycs_bg.jpg'></img>
            </MyCustomService>
            <NoItem>문의사항이 없습니다.</NoItem>
        </MyWrap>
    )
}

export default Mycustom
