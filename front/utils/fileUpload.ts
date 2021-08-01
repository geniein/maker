import axios from 'axios';

const fileUpload = (file:any) => {
    let formData = new FormData();

    for (const key of Object.keys(file)) {
        formData.append('file', file[key]);
    }        
    return axios.post("/api/item-contents/files", formData, {        
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
};

export default fileUpload;