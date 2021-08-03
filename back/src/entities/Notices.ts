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
  
  @Index('id', ['id'], { unique: true })
  @Entity({ schema: 'slack', name: 'notices' })
  export class Notices {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
  
    @Column('varchar', { name: 'category', length: 50 })
    category: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('varchar', { name: 'content', length: 4000})
    content: string;

    @Column('varchar', { name: 'author', length: 30 })
    author: string;
  
    @Column('varchar', { name: 'srcPath', length: 200 })
    srcPath: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  