import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {response, Response} from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const Response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const err = exception.getResponse() as | string | {error: string; statusCode:400; message: string[]};
        //check that 'as'

        if( typeof err !== 'string' && err.error === 'Bad Reqeust'){
            return response.status(status).json({
                success: false,
                code:status,
                data: err.message,
            });
        }

        response.status(status).json({
            success: false,
            cod: status,
            data: err,
        });
    }
}