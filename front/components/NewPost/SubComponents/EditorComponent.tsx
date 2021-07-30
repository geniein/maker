import useInput from '@hooks/useInput';
import React, { Component, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorComponent = () =>{

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
        <div style={{ display: 'flex', justifyContent:'center'}}>
            {/* <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"/> */}
            <div style={{height: "650px"}}>
                <ReactQuill 
                    style={{height: "600px"}} 
                    theme="snow" 
                    modules={toolbar} 
                    formats={quillFormat}
                    onChange={(content, delta, source, editor) => console.log(editor.getHTML())}                      
                    />
            </div>
        </div>
    )
}

export default EditorComponent;