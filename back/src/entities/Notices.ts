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
  
    @Column('varchar', { name: 'thumbnail', length: 200, nullable:true })
    thumbnail: string;

    @Column('varchar', { name: 'srcPath', length: 200, nullable:true })
    srcPath: string;

    @Column('varchar', { name: 'periodStart', length: 8, nullable:true })
    periodStart: string;
    
    @Column('varchar', { name: 'periodEnd', length: 8, nullable:true })
    periodEnd: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  