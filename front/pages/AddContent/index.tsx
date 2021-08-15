import Footer from '@components/Footer'
import Header from '@components/Header'
import NewPost from '@components/NewPost'
import TopMenu from '@components/TopMenu'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { FC } from 'react'
import { useHistory, useLocation } from 'react-router'
import { AddContentWrap, MyContentList, MyItem } from './styles'

interface Props{
    postStatus: string;
    orderId?: string;
    thumnailSrc?: string;
}

const AddContent:FC<Props> = ({postStatus,orderId,thumnailSrc}) => {

    const [postData, setPostData] = useState<any>(undefined);
    const history = useHistory();

    const location = useLocation<any>(); //location    

    if(location?.state !== undefined){         
        setPostData(location.state);
        delete location.state;
    }
    
    // useEffect(() => {
    //     console.log('Review');
    //     if(postStatus==='review'){
    //         getMyContentList(keyValue);
    //     }
        
    // }, [])    
    // const getMyContentList = useCallback((orderId?: string) =>{        
    //     axios.post('/api/users/mycontents',{orderId}).then((res)=>{
    //         console.log(res.data);
    //         setPostData(res.data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })  
    // },[]);
    if(postData===undefined) return (<div>Processing</div>)
    return (        
        <div>
            <AddContentWrap>                                        
                {postData &&<MyContentList>                
                    <MyItem>
                        {/* <div className='list_title'>
                            <p>주문번호</p>
                            <p>상품명</p>
                        </div>
                        <div className='list_title'>
                            <p>val.orderId</p>
                            <p>val.title</p>
                        </div> */}
                        <div className='item_wrap'>
                            <div className='item_src'>                           
                                <img src={postData.thumbnail}/>
                            </div>
                            <div className='item_box'>
                                <div>
                                    <p>주문번호</p>
                                    <p>{postData.orderId}</p>                                                                                                                                  
                                </div>
                            </div>
                        </div>
                    </MyItem>                                      
                </MyContentList>}                       
                
                <NewPost postStatus={postData.postStatus}des={"item-contents"} orderId={postData.orderId} contentId={postData.contentId}/>                     
            </AddContentWrap>
        </div>                   
    )
}

export default AddContent
