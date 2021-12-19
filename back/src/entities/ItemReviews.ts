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
  @Entity({ schema: 'slack', name: 'itemreviews' })
  export class ItemReviews {
    // @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    // id: number;
    
    // @Column('varchar', { name: 'reviewId', length: 100})
    @PrimaryGeneratedColumn('uuid')
    reviewId: string;

    @Column('varchar', { name: 'contentId', length: 100})
    contentId: string;

    @Column('varchar', { name: 'orderId', length: 100, nullable:true})
    orderId: string;

    @Column('varchar', { name: 'category', length: 50, nullable:true })
    category: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('varchar', { name: 'hashTag', length: 100, nullable:true })
    hashTag: string;

    @Column('varchar', { name: 'content', length: 2000})
    content: string;

    @Column('varchar', { name: 'author', length: 30 })
    author: string;

    @Column('varchar', { name: 'userId', length: 100 })
    userId: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  