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
  
    @Column('varchar', { name: 'name', length: 30 })
    name: string;
  
    @Column('varchar', { name: 'password', length: 100, select: false })
    password: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  