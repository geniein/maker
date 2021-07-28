import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import passport from 'passport';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;  

  app.enableCors({
    origin: true,
    credentials: true,
  });

  // app.useStaticAssets(
  //   process.env.NODE_ENV === 'production'
  //     ? path.join(__dirname, '..', '..', 'uploads')
  //     : path.join(__dirname, '..', 'uploads'),
  //   {
  //     prefix: '/uploads',
  //   },
  // );
  // app.useStaticAssets(
  //   process.env.NODE_ENV === 'production'
  //     ? path.join(__dirname, '..', '..', 'public')
  //     : path.join(__dirname, '..', 'public'),
  //   {
  //     prefix: '/dist',
  //   },
  // );

  const config = new DocumentBuilder()
  .setTitle('Maker API')
  .setDescription('Maker 개발을 위한 API 문서입니다.')
  .setVersion('1.0')
  // .addCookieAuth('connect.sid')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  // app.use(
  //   session({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: process.env.COOKIE_SECRET,
  //     cookie: {
  //       httpOnly: true,
  //     },
  //   }),
  // );
  app.use(passport.initialize());
  // app.use(passport.session());

  await app.listen(port).then(()=>{
    console.log(`NESTJS Listening on ${port}`);
  });

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
}
bootstrap();
