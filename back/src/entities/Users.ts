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
  
  @Index('email', ['email'], { unique: true })
  @Entity({ schema: 'slack', name: 'users' })
  export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
  
    @Column('varchar', { name: 'email', unique: true, length: 30 })
    email: string;
  
    @Column('varchar', { name: 'userName', length: 30 })
    userName: string;
  
    @Column('varchar', { name: 'password', length: 100, select: false })
    password: string;

    @Column('varchar', { name: 'level', length: 2, default: "1"})
    level: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column('varchar', { name: 'cartList', length: 1000 })
    cartList: string;
    
  }
  