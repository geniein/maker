import { ItemReviews } from '../../entities/ItemReviews';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ItemContents } from '../../entities/ItemContents';


export class CreateInitialData implements Seeder {    
  public async run(factory: Factory, connection: Connection): Promise<any> {
    //ITEMCONTENTS
    await connection
      .createQueryBuilder()
      .insert()
      .into(ItemContents)
      .values([          
          { id: 1,
            uk:"A1ssw123",
            category: 'All',
            title: '[Notice]New Wolrd',
            price: 40000,
            hashTag:'#HelloWorld',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/public/resource/',
            thumbnail:'/public/castle.jpg',
            discount: 50
            },
        { id: 2,
            uk:"A2ssw1234",
            category: 'All',
            title: '[UYUNI]',
            price: 50000,
            hashTag:'#UYUNI DESERT',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/public/resource/',
            thumbnail:'/public/uyuni.jpg',
            discount: 40
            },
        { id: 3,
            uk:"A3ssw12345",
            category: 'All',
            title: '[CLOUD]',
            price: 60000,
            hashTag:'#AWESOME CLOUD',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/public/resource/',
            thumbnail:'/public/cloud.jpg',
            discount: 20
            },
        { id: 4,
            uk:"A5ssw123456",
            category: 'All',
            title: '[NEW]',
            price: 70000,
            hashTag:'#BRAND NEW',
            content:'신세계에 오신걸 환영합니다.',
            author:'ingenie',
            srcPath:'/public/resource/',
            thumbnail:'/public/new.jpg',
            discount: 10
            }
    ])
      .execute();  
      //ITEMREVIEWS
      await connection
      .createQueryBuilder()
      .insert()
      .into(ItemReviews)
      .values([          
          { id: 1,
            uk:"A1ssw123",
            category: 'All',
            title: '[REVIEW]New Wolrd',            
            hashTag:'#HelloWorld',
            content:'WELCOME to New World',
            author:'ingenie',
            contentKey: "A1ssw123"                                  
            },
        { id: 2,
            uk:"A2ssw1234",
            category: 'All',
            title: '[REVIEW] FAST PASS',            
            hashTag:'#UYUNI DESERT',
            content:'FAST CAMP MAKES AWESOME MANPOWER',
            author:'ingenie',   
            contentKey: "A1ssw123"                                           
            },
        { id: 3,
            uk:"A3ssw12345",
            category: 'All',
            title: '[REVIEW] CLOUDY DAY',            
            hashTag:'#AWESOME CLOUD',
            content:'Cloud is comming',
            author:'ingenie',     
            contentKey: "A1ssw123"                                                     
            },
        { id: 4,
            uk:"A5ssw123456",
            category: 'All',
            title: '[REVIEW] RAINY',            
            hashTag:'#BRAND NEW',
            content:'Rain is comming',
            author:'ingenie',  
            contentKey: "A1ssw123"                                            
            }
    ])
      .execute();   
      
  }
}
