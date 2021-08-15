import useInput from '@hooks/useInput'
import axios from 'axios'
import React, { MutableRefObject, useRef, useState, VFC } from 'react'
import { useHistory } from 'react-router'
import { CancelBtn, ItemContentWrap, NewPostWrap, PostBtn } from './styles'
import EditorComponent from './SubComponents/EditorComponent'
import UploadFiles from './SubComponents/UploadFiles'

interface Props{
    postStatus: string; //'Screen Status 'notices', 'item-contents','item-reviews'
    des: string;//API DESTINATION
    orderId?: string; // condi : 'item-reviews'
    contentId?: string; // condi : 'item-reviews'
}

const NewPost:VFC<Props> = ({postStatus, des, orderId, contentId}) =>{
    //temp
    const categoryList = [{value:1, text:"Notice"},{value:2, text:"Update"}]    

    const history = useHistory();
    const uploadReferenece = useRef<any>(null);

    const [title,onChangeTitle, setTitle] = useInput('');
    const [content,onChangeContent, setContent] = useInput('');        
    const [category, onChangeCategory,setCategory] = useInput('');
    const [hashTag, onChangeHashTag,setHashTag] = useInput('');
    const [price, onChangePrice,setPrice] = useInput('');
    const [discount, onChangeDiscount,setDiscount] = useInput('');

    const onClickPost = async()=>{

        if (title.trim() == '') {
            alert('제목을 입력해주세요'); return;
        }
        if (content.trim() == '') {
            alert('내용을 입력해주세요'); return;
        }        
        if( postStatus==='item-contents' && uploadReferenece !== null){
            await uploadReferenece?.current?.upload().then( (result:any) => {
                const files = result;
                console.log('file',result);

                axios.post(`/api/${postStatus}/newpost`,{
                    title,
                    content,
                    category,
                    price,
                    discount,
                    hashTag,                    
                    srcPath:'test',
                    thumbnail: files
                }).then((res:any)=>{
                    alert('Sucess Post');
                }).catch((err:any)=>{
                    console.log(err);
                })                
            }).catch( (err:any) =>{
                console.log(err);
            });            
        } else {
            axios.post(`/api/${postStatus}/newpost`,{
                title,
                content,
                category,                
                hashTag,
                orderId,
                contentId
            }).then((res:any)=>{
                alert('Sucess Post');
            }).catch((err:any)=>{
                console.log(err);
            }) 
        }
    }
    const onEditorChange = (val:any) =>{
        setContent(val);
    }
    return (
        <NewPostWrap>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:'60%', marginBottom:'30px'}}>
                    <input style={{width:'100%', height:'30px', marginBottom:'20px'}} onChange={onChangeTitle} placeholder='제목'/>
                    <ItemContentWrap>
                        <tbody>
                            <tr>
                                <th>Category</th>
                                <td><input type="text" onChange={onChangeCategory}/></td>
                                <th>HashTag</th>
                                <td><input type="text" onChange={onChangeHashTag}/></td>
                            </tr>
                            {postStatus == 'item-contents' && <tr>
                                <th>Price</th>
                                <td><input type="number" onChange={onChangePrice}/></td>
                                <th>Discount</th>
                                <td><input type="number" onChange={onChangeDiscount}/></td>
                            </tr>}
                        </tbody>
                    </ItemContentWrap>
                    <UploadFiles ref={uploadReferenece} /> 
                    <EditorComponent value={content} onChange={onEditorChange}/>                    
                    {/* <div className="text-center pd12">
                        <button className="lf-button primary" onClick={onClickSearch}>저장</button>
                    </div>       */}
                    <div style={{ display: 'flex', justifyContent:'center'}}>
                        <PostBtn onClick={onClickPost}>Post</PostBtn>
                        <CancelBtn onClick={()=>history.go(-1)}>Cancel</CancelBtn>
                    </div>                    
                </div>
            </div>
        </NewPostWrap>
    )
}

export default NewPost;
