import { HttpException } from '@nestjs/common';
import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";

export const multerOptions = (desPath:string) =>{
  return {
      fileFilter: (request, file, callback) => {
      if (file.mimetype.match(/\/(jpg|jpeg|png|mp4)$/)) {      
        callback(null, true);
      } else {
        callback(new HttpException('지원하지 않는 이미지 형식입니다.',400), false);
      }
    },

    storage: diskStorage({
      destination: (request, file, callback) => {
        const userInfo:any= request.user;
        const fileName = file.originalname;        
        const orderId:string = fileName.split('_').length > 1 ? fileName.split('_')[0]+'/' : '';                 
        let uploadPath: string = desPath || 'public';
        uploadPath = uploadPath + '/' + 'cubya@hotmail.co.kr' + '/' + orderId;
        if (!existsSync(uploadPath)) {        
          mkdirSync(uploadPath,{recursive:true});
        }
        callback(null, uploadPath);
      },

      filename: (request, file, callback) => {      
        callback(null, file.originalname);
      }
    })
  }
}


export const createImageURL = (file): string => {
  const serverAddress: string = 'test';  
  return `${serverAddress}/public/${file.filename}`;
}