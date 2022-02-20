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
          {
            contentCode:"invite",
            contentId:"A1ssw123",
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
          {
            contentCode:"invite",
              contentId:"A2ssw1234",
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
          {
            contentCode:"invite",
              contentId:"A3ssw12345",
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
          { 
            contentCode:"invite",
              contentId:"A5ssw123456",
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
          { 
            contentCode:"adver",
              contentId:"A2qddw1",
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
          {
            contentCode:"adver",
              contentId:"A2qddw2",
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
          { 
            contentCode:"adver",
              contentId:"A2qddw3",
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
          {
            contentCode:"adver",
              contentId:"A2qddw4",
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
          { 
            contentCode:"adver",
              contentId:"A2qddw5",
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
          { 
            contentCode:"adver",
              contentId:"A2qddw6",
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
          { 
            contentCode:"adver",
              contentId:"A2qddw7",
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
          {
            contentCode:"adver",
              contentId:"A2qddw8",
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
          {
            contentCode:"letter",
              contentId:"A2qddw1q1",
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
          {
            contentCode:"letter",
              contentId:"A2qddw2q2",
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
          {
            contentCode:"letter",
              contentId:"A2qddw3q3",
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
          { 
            contentCode:"letter",
              contentId:"A2qddw4q4",
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
          { 
            contentCode:"letter",
              contentId:"A2qddw5q5",
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
          { 
            contentCode:"letter",
              contentId:"A2qddw6q6",
              category: 'WEDDING',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'신세계에 오신걸 환영합니다.',
              author:'ingenie',
              srcPath:'/public/resource/',
              thumbnail:'/public/content/letter/6.jpg',
              discount: 10
          },
          { 
            contentCode:"letter",
              contentId:"proto",
              category: 'PROTO',
              title: '[NEW]',
              price: 70000,
              hashTag:'#BRAND NEW',
              content:'Prototype',
              author:'ingenie',
              srcPath:'/public/proto/',
              thumbnail:'/public/proto/1.jpg',
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
          { 
            reviewId:"A1ssw123",
            category: 'All',
            title: '[REVIEW]New Wolrd',            
            hashTag:'#HelloWorld',
            content:'WELCOME to New World',
            author:'ingenie',
            userId:'cubya@hotmail.co.kr',     
            contentId: "A1ssw123"                                  
            },
        { 
            reviewId:"A2ssw1234",
            category: 'All',
            title: '[REVIEW] FAST PASS',            
            hashTag:'#UYUNI DESERT',
            content:'FAST CAMP MAKES AWESOME MANPOWER',
            author:'ingenie',   
            userId:'cubya@hotmail.co.kr',     
            contentId: "A1ssw123"                                           
            },
        { 
            reviewId:"A3ssw12345",
            category: 'All',
            title: '[REVIEW] CLOUDY DAY',            
            hashTag:'#AWESOME CLOUD',
            content:'Cloud is comming',
            author:'ingenie',
            userId:'cubya@hotmail.co.kr',     
            contentId: "A1ssw123"                                                     
            },
        { 
            reviewId:"A5ssw123456",
            category: 'All',
            title: '[REVIEW] RAINY',            
            hashTag:'#BRAND NEW',
            content:'Rain is comming',
            author:'ingenie', 
            userId:'cubya@hotmail.co.kr',      
            contentId: "A1ssw123"                                            
            }
    ])
      .execute();   
      
  }
}
