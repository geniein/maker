import DragDrop from '@components/DragDrop'
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
    const [postDes,setPostDes]  = useState<any>('');
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
                <MyContentList>
                    <MyItem>
                        <div className='list_title'>
                            <select onChange={(e:any)=>setPostDes(e.target.value)}>
                                <option value="item-contents">컨텐츠추가</option>
                                <option value="notices">공지추가</option>
                                <option value="notices">이벤트추가</option>                    
                            </select>
                        </div>
                    </MyItem>
                </MyContentList> 
                <DragDrop></DragDrop>              
                {/* <NewPost postStatus={postDes} des={postDes}/>                      */}
            </AddContentWrap>
        </div>                   
    )
}

export default AddContent
