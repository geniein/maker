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
            contentCode:"invite",
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
            contentCode:"invite",
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
            contentCode:"invite",
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
            contentCode:"invite",
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
          },
          { id: 5,
            contentCode:"adver",
              uk:"A2qddw1",
              category: 'MARKET',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/1.jpg',
              discount: 10
          },
          { id: 6,
            contentCode:"adver",
              uk:"A2qddw2",
              category: 'MARKET',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/2.jpg',
              discount: 10
          },
          { id: 7,
            contentCode:"adver",
              uk:"A2qddw3",
              category: 'MARKET',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/3.jpg',
              discount: 10
          },
          { id: 8,
            contentCode:"adver",
              uk:"A2qddw4",
              category: 'COMPANY',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/4.jpg',
              discount: 10
          },
          { id: 9,
            contentCode:"adver",
              uk:"A2qddw5",
              category: 'COMPANY',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/5.jpg',
              discount: 10
          },
          { id: 10,
            contentCode:"adver",
              uk:"A2qddw6",
              category: 'COMPANY',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/6.jpg',
              discount: 10
          },
          { id: 11,
            contentCode:"adver",
              uk:"A2qddw7",
              category: 'SELF',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/7.jpg',
              discount: 10
          },
          { id: 12,
            contentCode:"adver",
              uk:"A2qddw8",
              category: 'SELF',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/adver/8.jpg',
              discount: 10
          },
          { id: 13,
            contentCode:"letter",
              uk:"A2qddw1q1",
              category: 'PROPOSE',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/1.jpg',
              discount: 10
          },
          { id: 14,
            contentCode:"letter",
              uk:"A2qddw2q2",
              category: 'PROPOSE',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/2.jpg',
              discount: 10
          },
          { id: 15,
            contentCode:"letter",
              uk:"A2qddw3q3",
              category: 'PROPOSE',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/3.jpg',
              discount: 10
          },
          { id: 16,
            contentCode:"letter",
              uk:"A2qddw4q4",
              category: 'WEDDING',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/4.jpg',
              discount: 10
          },
          { id: 17,
            contentCode:"letter",
              uk:"A2qddw5q5",
              category: 'WEDDING',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/5.jpg',
              discount: 10
          },
          { id: 18,
            contentCode:"letter",
              uk:"A2qddw6q6",
              category: 'WEDDING',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/6.jpg',
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
