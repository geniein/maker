import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';  
import { ItemOrders } from './ItemOrders';
  
  @Index('userId', ['userId'], {})
  @Entity({ schema: 'slack', name: 'users' })
  export class Users {
    
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })    
    id: number;

    @PrimaryColumn('varchar', { name: 'userId', length: 100 })    
    userId: string;
  
    @Column('varchar', { name: 'userPassword', length: 100, select: false })
    userPassword: string;

    @Column('varchar', { name: 'email', length: 100 })
    email: string;

    @Column('varchar', { name: 'kakaoEmail', length: 100 })
    kakaoEmail: string;

    @Column('varchar', { name: 'naverEmail', length: 100 })
    naverEmail: string;
  
    @Column('varchar', { name: 'userName', length: 30 })
    userName: string;
  
    @Column('varchar', { name: 'userNickname', length: 30 })
    userNickname: string;

    @Column('varchar', { name: 'level', length: 2, default: "1"})
    level: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column('varchar', { name: 'cartList', length: 1000, nullable:true })
    cartList: string;

    @OneToMany(type=>ItemOrders, itemorders => itemorders.orderOwner)    
    myContents: ItemOrders[];
    
  }
  