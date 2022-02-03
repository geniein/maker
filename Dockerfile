FROM nginx

RUN mkdir /app

WORKDIR /app

RUN mkdir ./dist

ADD ./front/dist ./dist
ADD ./front/index.html ./index.html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]