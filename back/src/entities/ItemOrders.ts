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
  
  @Index('orderId', ['orderId'])
  @Index('userId', ['userId'])
  @Entity({ schema: 'slack', name: 'itemorders' })
  export class ItemOrders {
    // @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    // id: number;
    
    @PrimaryGeneratedColumn('uuid')
    orderId: string;

    //@Column('varchar', { name: 'paidId',unique: true, length: 100 })
    @PrimaryGeneratedColumn('uuid')
    paymentId: string;
    
    @Column('varchar', { name: 'userId', length: 100,  nullable: true  })
    userId: string;

    @Column('varchar', { name: 'paymentStatus', length: 2, default:'Y'})
    paymentStatus: string;

    @Column('varchar', { name: 'contentId', length: 100, nullable: true })
    contentId: string;
    
    @Column('varchar', { name: 'itemCount', length: 100, default:1 })
    itemCount: number;

    @Column('varchar', { name: 'dvdServ', length: 1,  default:'0' })
    dvdService: string;

    @Column('varchar', { name: 'usbServ', length: 1, default:'0' })
    usbService: string;
    
    @Column('int', { name: 'price'})
    price: number;

    @Column('varchar', { name: 'reviewStatus', length: 1, default:'N' })
    reviewStatus: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
    @ManyToOne(type=>Users, user=>user.myContents, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
    orderOwner : Users;

    @OneToOne(type=>ItemContents, contentInfo => contentInfo.contentId)
    @JoinColumn({ name: 'contentId', referencedColumnName: 'contentId' })    
    contentInfo: ItemContents;
  }
  