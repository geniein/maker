import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';  
  
  @Index('userId', ['userId'], { unique: true })
  @Entity({ schema: 'slack', name: 'users' })
  export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'userId', unique: true, length: 30 })
    userId: string;
  
    @Column('varchar', { name: 'userPassword', length: 100, select: false })
    userPassword: string;

    @Column('varchar', { name: 'email', length: 30 })
    email: string;
  
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
    
  }
  