import axios from 'axios';

const fileUpload = ( api:string,files:any, orderId?:string) => {
    // let formData = new FormData();

    // for (const key of Object.keys(file)) {
    //     formData.append('file', file[key]);
    // }        

    let file:any = files[0];
    let formData = new FormData();
    const fileName = orderId !== undefined ? `/${orderId}/${file.originalname}` : undefined;
    formData.append("file",file,fileName);    
    return axios.post(`${api}`, formData, {        
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
};

export default fileUpload;