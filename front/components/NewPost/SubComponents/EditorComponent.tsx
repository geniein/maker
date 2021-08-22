import useInput from '@hooks/useInput';
import fileUpload from '@utils/fileUpload';
import React, { Component, FC, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props{
    value:string,
    onChange: (val:any)=>void;
}

const EditorComponent:FC<Props> = ({value, onChange}) =>{
    const QuillRef = useRef<ReactQuill>();
    const [ content, onChangeContent, setContent ] = useInput('');

    const imageHandler = () =>{
        const input = document.createElement("input");

        input.setAttribute("type","file");
        input.setAttribute("accept","image/*");;
        input.click();

        input.onchange = async () =>{
            if(input.files){
                // let file:any = input.files[0];
                // let formData = new FormData();

                // formData.append("file",file);

                // let fileName = file.name;
                // console.log(formData);
                
                try {
                fileUpload('/api/item-contents/files',input.files)
                .then(response => {
                    console.log('style="width:100%"');
                    const range = QuillRef.current?.getEditor().getSelection()?.index;
                    if (range !== null && range !== undefined) {
                        let quill = QuillRef.current?.getEditor();

                        quill?.setSelection(range, 1);

                        quill?.clipboard.dangerouslyPasteHTML(
                        range,
                        `<img src=${response.data} style="width:100%"/>`
                        );
                    }

                    return { ...response, success: true };
                    //     if (response.data.success) {

                    //         const quill = reactQuillRef.getEditor();
                    //         quill.focus();

                    //         let range = quill.getSelection();
                    //         let position = range ? range.index : 0;

                    //         //먼저 노드 서버에다가 이미지를 넣은 다음에   여기 아래에 src에다가 그걸 넣으면 그게 
                    //         //이미지 블롯으로 가서  크리에이트가 이미지를 형성 하며 그걸 발류에서     src 랑 alt 를 가져간후에  editorHTML에 다가 넣는다.
                    //         quill.insertEmbed(position, "image", { src: response.data.url, alt: response.data.fileName });
                    //         quill.setSelection(position + 1);

                    //         if (_isMounted) {
                    //             setThisState({
                    //                 ...thisState,
                    //                 files: [...thisState.files, file]
                    //             })
                    //             //, () => { this.props.onFilesChange(this.state.files) });
                    //         }
                    //     } else {
                    //         return alert('failed to upload file')
                    //     }                    
                    }).catch((err)=>{
                        console.log(err);
                    })
                }catch{
                    
                }
            }
        }
    }

    const toolbar = useMemo(()=>({
        toolbar:{
            container: [        
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['clean'] ],
        handlers: {
            image: imageHandler,
        }
    }}),[]);
    // const toolbar = useMemo(
    //     () => ({
    //       toolbar: {
    //         container: [
    //           ["bold", "italic", "underline", "strike", "blockquote"],
    //           [{ size: ["small", false, "large", "huge"] }, { color: [] }],
    //           [
    //             { list: "ordered" },
    //             { list: "bullet" },
    //             { indent: "-1" },
    //             { indent: "+1" },
    //             { align: [] },
    //           ],
    //           ["image", "video"],
    //         ],
    //         handlers: {
    //           image: imageHandler,
    //         },
    //       },
    //     }),
    //     []
    //   );
    const quillFormat = [       
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'file',
        'align', 'color', 'background',        
      ];  

    return(
        <div>
         {/* <div style={{ display: 'flex', justifyContent:'center'}}>            
             <div style={{height: "800px"}}>                 */}
             {/* <div id="toolbar">
                <select className="ql-header">
                    <option value="1"></option>
                    <option value="2"></option>
                </select>
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <select className="ql-color">
                <option value="red"></option>
                <option value="green"></option>
                <option value="blue"></option>
                <option value="orange"></option>
                <option value="violet"></option>
                <option value="#d0d1d2"></option>
                <option selected></option>
                </select>
                <select className="ql-background"></select>
                <button className="ql-link"></button>
                <button className="ql-image"></button>
            </div> */}
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                          QuillRef.current = element;
                        }
                      }} 
                    style={{height: "600px", marginBottom:'20px'}} 
                    theme="snow" 
                    modules={toolbar} 
                    formats={quillFormat}
                    value={value || ''}
                    onChange={(content, delta, source, editor) => onChange(editor.getHTML())}                      
                    />
        </div>
    )
}

export default EditorComponent;