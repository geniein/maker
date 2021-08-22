import axios from 'axios';

const fileUpload = ( api:string,files:any) => {
    // let formData = new FormData();

    // for (const key of Object.keys(file)) {
    //     formData.append('file', file[key]);
    // }        

    let file:any = files[0];
    let formData = new FormData();

    formData.append("file",file);

    return axios.post(`${api}`, formData, {        
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
};

export default fileUpload;