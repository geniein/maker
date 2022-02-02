import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('-----------------------------------------');
    console.log(request.user)
    console.log('-----------------------------------------');
    return request.user;
  },
);

export const ItemContent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {  
    const request = ctx.switchToHttp().getRequest();
    return request.itemcontent;
  },
);

export const Notice = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {  
    const request = ctx.switchToHttp().getRequest();
    return request.notices;
  },
);