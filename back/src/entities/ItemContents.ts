import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';  
import { ItemOrders } from './ItemOrders';
  
  @Index('contentId', ['contentId'], { unique: true })
  @Entity({ schema: 'slack', name: 'itemcontents' })
  export class ItemContents {
    // @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    // id: number;
    
    @PrimaryGeneratedColumn('uuid')
    contentId: string;
  
    @Column('varchar', { name: 'contentCode', length: 50 })
    contentCode: string;

    @Column('varchar', { name: 'category', length: 50 })
    category: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('int', { name: 'price'})
    price: number;

    @Column('int', { name: 'discount'})
    discount: number;

    @Column('varchar', { name: 'hashTag', length: 300 })
    hashTag: string;

    @Column('varchar', { name: 'content', length: 4000})
    content: string;

    @Column('varchar', { name: 'author', length: 30 })
    author: string;
  
    @Column('varchar', { name: 'srcPath', length: 200 })
    srcPath: string;

    @Column('varchar', { name: 'thumbnail', length: 200 })
    thumbnail: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
    @OneToOne(type=>ItemOrders, itemorders => itemorders.contentId)    
    itemOrders: ItemOrders;
  }
  