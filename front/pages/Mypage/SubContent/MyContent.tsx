import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { MyWrap, MyContentList, MyContentMenu, MyItem, NoItem } from './styles'

const Mycontent = () => {

    const [myContentList, setMyContentList] = useState<any>([]);
    const history = useHistory();
    
    useEffect(() => {
        console.log('Mycontent');
        getMyContentList();     
    }, [])    
    const getMyContentList = () =>{        
        axios.post('/api/users/mycontents').then((res)=>{
            console.log(res.data);
            if(res.data) setMyContentList(res.data);
        }).catch((err)=>{
            console.log(err);
        })  
    }    
    const onClickCartItem = useCallback((id:number) => {
        history.push(`/workspace/detail/${id}`);              
    },[])

    const onClickPage = (pagePath:string,orderId?:string,contentId?:string,thumbnail?:string) =>{
        history.push({
            pathname: `/workspace/${pagePath}`,
            state:{postStatus:'item-reviews',orderId,contentId,thumbnail}
        })
    }   

    const onClickEdit = (orderId:string) =>{
        history.push({
            pathname: `/editorspace`,
            state:{orderId:orderId}
        })
    }   

    return (
        <MyWrap>
            <p className='title'>내영상/사진보기 <span>helloworld</span></p>
            <MyContentMenu>
                <li onClick={getMyContentList}>
                    일반영상
                </li>
                <li>
                    체험영상
                </li>
                <li>
                    사진보정
                </li>
            </MyContentMenu>
            {myContentList.length>0 && <MyContentList>
                {myContentList.map((val:any, idx:number)=>{
                    return (
                        <MyItem key={idx}>
                    <div className='list_title'>
                        <p>주문번호</p>
                        <p>상품명</p>
                    </div>
                    <div className='list_title'>
                        <p>{val.orderId}</p>
                        <p>{val.title}</p>
                    </div>
                    <div className='item_wrap'>
                        <div className='item_box'>
                            <img src={val.thumbnail}/>
                        </div>
                        <div className='item_box'>
                            <p className='item_comment'>
                                제작 된 동영상은 제작일로부터 100일 동안 보관되며 업로드 데이터는 한달간 보관 후 폐기됩니다.
                                무료체험용 영상은 다운로드가 불가합니다. 일반영상주문버튼으로 결제 및 변경을 해주세요!
                            </p>
                            <div className='item_btn' onClick={()=>onClickEdit(val.orderId)}>
                                편집하기
                            </div>
                            <div className='item_btn'>
                                다운로드
                            </div>
                            {val.reviewStatus ==='N' && <div className='item_btn' onClick={()=>onClickPage('addreview',val.orderId,val.contentId,val.thumbnail)}>
                                리뷰쓰기
                            </div>}
                        </div>
                    </div>
                </MyItem>
                    )
                })}                               
            </MyContentList>
            }
            {myContentList.length<1 &&<NoItem>주문하신 아이템이 없습니다.</NoItem>}
        </MyWrap>
    )
}

export default Mycontent
