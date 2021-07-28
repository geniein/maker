import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ItemContents } from 'src/entities/ItemContents';


export class CreateInitialData implements Seeder {    
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ItemContents)
      .values([
          { id: 1,
            uk:"A#ssw123",
            category: 'All',
            title: '[Notice]New Wolrd',
            price: 40000,
            hashTag:'#HelloWorld',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/dist/images/resource/',
            thumbnail:'/dist/images/castle.jpg',
            },
        { id: 2,
            uk:"A#ssw1234",
            category: 'All',
            title: '[UYUNI]',
            price: 50000,
            hashTag:'#UYUNI DESERT',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/dist/images/resource/',
            thumbnail:'/dist/images/uyuni.jpg',
            },
        { id: 3,
            uk:"A#ssw12345",
            category: 'All',
            title: '[CLOUD]',
            price: 60000,
            hashTag:'#AWESOME CLOUD',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/dist/images/resource/',
            thumbnail:'/dist/images/cloud.jpg"',
            },
        { id: 4,
            uk:"A#ssw123456",
            category: 'All',
            title: '[NEW]',
            price: 70000,
            hashTag:'#BRAND NEW',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/dist/images/resource/',
            thumbnail:'/dist/images/new.jpg"',
            }])
      .execute();    
  }
}
