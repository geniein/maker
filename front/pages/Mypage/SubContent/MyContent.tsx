import React from 'react'
import { MyWrap, MyContentList, MyContentMenu, MyItem, NoItem } from './styles'

const Mycontent = () => {
    return (
        <MyWrap>
            <p className='title'>내영상/사진보기 <span>helloworld</span></p>
            <MyContentMenu>
                <li>
                    일반영상
                </li>
                <li>
                    체험영상
                </li>
                <li>
                    사진보정
                </li>
            </MyContentMenu>
            {/* <MyContentList>
                <MyItem>
                    <div className='list_title'>
                        <p>주문번호</p>
                        <p>상품명</p>
                    </div>
                    <div className='list_title'>
                        <p>SR20181235719448491-235719</p>
                        <p>Love mood : 러브무드 : 체험용</p>
                    </div>
                    <div className='item_wrap'>
                        <div className='item_box'>
                            <img />
                        </div>
                        <div className='item_box'>
                            <p className='item_comment'>제작 된 동영상은 제작일로부터 100일 동안 보관되며 업로드 데이터는 한달간 보관 후 폐기됩니다.
무료체험용 영상은 다운로드가 불가합니다. 일반영상주문버튼으로 결제 및 변경을 해주세요!
                            </p>
                            <div className='item_btn'>
                                다운로드
                            </div>
                        </div>
                    </div>
                </MyItem>
                <MyItem>
                    <div className='list_title'>
                        <p>주문번호</p>
                        <p>상품명</p>
                    </div>
                    <div className='list_title'>
                        <p>SR20181235719448491-235719</p>
                        <p>Love mood : 러브무드 : 체험용</p>
                    </div>
                    <div className='item_wrap'>
                        <div className='item_box'>
                            <img />
                        </div>
                        <div className='item_box'>
                            <p className='item_comment'>제작 된 동영상은 제작일로부터 100일 동안 보관되며 업로드 데이터는 한달간 보관 후 폐기됩니다.
무료체험용 영상은 다운로드가 불가합니다. 일반영상주문버튼으로 결제 및 변경을 해주세요!
                            </p>
                            <div className='item_btn'>
                                다운로드
                            </div>
                        </div>
                    </div>
                </MyItem>
            </MyContentList> */}
            <NoItem>주문하신 아이템이 없습니다.</NoItem>
        </MyWrap>
    )
}

export default Mycontent
