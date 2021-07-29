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
  
  @Index('uk', ['uk'], { unique: true })
  @Entity({ schema: 'slack', name: 'itemreviews' })
  export class ItemReviews {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
    
    @Column('varchar', { name: 'uk', length: 100})
    uk: string;

    @Column('varchar', { name: 'contentKey', length: 100})
    contentKey: string;

    @Column('varchar', { name: 'category', length: 50 })
    category: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('varchar', { name: 'hashTag', length: 100, nullable:true })
    hashTag: string;

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
  