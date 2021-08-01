import useInput from '@hooks/useInput';
import React, { Component, FC, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props{
    value:string,
    onChange: (val:any)=>void;
}

const EditorComponent:FC<Props> = ({value, onChange}) =>{
    
    const [ content, onChangeContent, setContent ] = useInput('');

    const toolbar = {toolbar:[
        //[{ 'font': [] }],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['clean']
      ]
    }
    const quillFormat = [       
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ];

    return(
        <div>
         {/* <div style={{ display: 'flex', justifyContent:'center'}}>            
             <div style={{height: "800px"}}>                 */}
                <ReactQuill 
                    style={{height: "600px"}} 
                    theme="snow" 
                    modules={toolbar} 
                    formats={quillFormat}
                    value={value || ''}
                    onChange={(content, delta, source, editor) => onChange(editor.getHTML())}                      
                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>                    
                </div>
        {/* </div>
         </div> */}
        </div>
    )
}

export default EditorComponent;