import React, { MutableRefObject, useRef } from 'react'
import EditorComponent from './SubComponents/EditorComponent'
import UploadFiles from './SubComponents/UploadFiles'

const NewPost = () =>{
    const categoryList = [{value:1, text:"Notice"},{value:2, text:"Update"}]
    const uploadReferenece = useRef<HTMLDivElement>(null);

    //useImperativeHandle 확인하기
    const onClickSearch = async()=>{
        if(uploadReferenece !== null) console.log(uploadReferenece?.current);
        // await uploadReferenece.current.upload()
        //uploadReferenece
        // await 
        
        // .then( (result:any) => {
        //     const files = result;
        //     alert('저장 완료');
        // }).catch( (err:any) =>{
        //     console.log(err);
        // });
    }
    return (
        <div>
            <EditorComponent></EditorComponent>
            <UploadFiles ref={uploadReferenece} />
            <div className="text-center pd12">
                <button className="lf-button primary" onClick={onClickSearch}>저장</button>
            </div>
        </div>
    )
}

export default NewPost;
