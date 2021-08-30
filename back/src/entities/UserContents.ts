import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';  
import { ItemContents } from './ItemContents';
import { Users } from './Users';
    
  @Index('userId', ['userId'])
  @Entity({ schema: 'slack', name: 'usercontents' })
  export class UserContents {    
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
        
    @Column('varchar', { name: 'userId', length: 100,  nullable: true  })
    userId: string;

    @Column('varchar', { name: 'orderId', length: 100, nullable: true })
    orderId: string;

    @Column('varchar', { name: 'contentId', length: 100, nullable: true })
    contentId: string;

    @Column('varchar', { name: 'paymentId', length: 100,  nullable: true  })
    paymentId: string;    
    
    @Column('int', { name: 'imageCount', default:1 })
    imageCount: number;

    @Column('varchar', { name: 'resultVideo', length: 100,  nullable: true  })
    resultVideo: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;       
  }
  