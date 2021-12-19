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
  
  @Index('reviewId', ['reviewId'], { unique: true })
  @Entity({ schema: 'slack', name: 'reviewcomments' })
  export class ReviewComments {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
        
    @Column('varchar', { name: 'reviewId', length: 100, nullable:true })
    reviewId: string;

    @Column('varchar', { name: 'reviewKey', length: 100, nullable:true })
    reviewKey: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('varchar', { name: 'content', length: 2000})
    content: string;

    @Column('varchar', { name: 'author', length: 30 })
    author: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  