import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

dotenv.config();

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME ||'root',
  password: process.env.DB_PASSWORD ||'password',
  database: process.env.DB_DATABASE ||'slack',
  entities: [    
    // Users,
    // ItemContents
    __dirname + '/src/entities/*.ts'
  ],  
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};

export default typeOrmConfig; 