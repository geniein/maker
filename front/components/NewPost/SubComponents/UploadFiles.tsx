import fileUpload from '@utils/fileUpload';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const UploadFiles = forwardRef((props, ref) => {

    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [message, setMessage] = useState('');

    const selectFile = (e:any) => {        
        setSelectedFiles(e.target.files);
    };

    const fileInput = useRef(null);

    useImperativeHandle(ref, () => ({
        upload: () => {                        
            return new Promise((resolve, reject) => {
                console.log(selectedFiles);
                if (selectedFiles) {
                    let result = fileUpload(`/api/item-contents/files`,selectedFiles)
                        .then((response:any) => {
                            setMessage(response.data);
                            resolve(response.data);
                            //return UploadService.getFiles();
                        })
                        .catch((err:any) => {
                            // if(fileInput!==null) {fileInput.current.value = ''};
                            setSelectedFiles(undefined);
                            if (err.response.data.message) {
                                setMessage(err.response.data.message);
                            } else {
                                setMessage("Could not upload the file!");
                            }
                            reject();
                        });
                } else {
                    resolve([]);
                }
            })
        }
    }),[selectedFiles]);

    return(
        <div>
            <label className="btn btn-default">        
                <input type="file" onChange={selectFile} ref={fileInput} multiple />
            </label>                
            <div className="alert alert-light" role="alert" style={{color:'red'}}>
            {message}
            </div>  
        </div>
    )    
})

export default UploadFiles;

