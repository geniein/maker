import axios from 'axios'
import React, { MutableRefObject, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { CancelBtn, NewPostWrap, PostBtn } from './styles'
import EditorComponent from './SubComponents/EditorComponent'
import UploadFiles from './SubComponents/UploadFiles'

const NewPost = () =>{
    //temp
    const categoryList = [{value:1, text:"Notice"},{value:2, text:"Update"}]    

    const history = useHistory();
    const uploadReferenece = useRef<any>(null);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const onClickCancel = () =>{
        history.go(-1);
    }

    const onClickPost = async()=>{

        if (title.trim() == '') {
            alert('제목을 입력해주세요'); return;
        }
        if (content.trim() == '') {
            alert('내용을 입력해주세요'); return;
        }
        if(uploadReferenece !== null){
            await uploadReferenece?.current?.upload().then( (result:any) => {
                const files = result;
                console.log(result);

                axios.post('/api/item-contents/newPost',{
                    title,
                    content,
                    category:'NOTICE',
                    price: 50000,
                    hashTag: '#FIRST COMMIT',
                    author: 'ingenie',
                    srcPath:'test',
                    thumbnail: 'test'
                }).then((res:any)=>{
                    alert('Sucess Post');
                }).catch((err:any)=>{
                    console.log(err);
                })                
            }).catch( (err:any) =>{
                console.log(err);
            });            
        }
    }
    const onEditorChnage = (val:any) =>{
        setContent(val);
    }
    return (
        <NewPostWrap>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:'60%', marginBottom:'30px'}}>
                    <input style={{width:'100%', height:'30px', marginBottom:'20px'}} onChange={(e)=>setTitle(e.target.value)} placeholder='제목'/>
                    <UploadFiles ref={uploadReferenece} />
                    <EditorComponent value={content} onChange={onEditorChnage}/>                    
                    {/* <div className="text-center pd12">
                        <button className="lf-button primary" onClick={onClickSearch}>저장</button>
                    </div>       */}
                    <div style={{ display: 'flex', justifyContent:'center'}}>
                        <PostBtn onClick={onClickPost}>Post</PostBtn>
                        <CancelBtn onClick={onClickCancel}>Cancel</CancelBtn>
                    </div>                    
                </div>
            </div>
        </NewPostWrap>
    )
}

export default NewPost;
