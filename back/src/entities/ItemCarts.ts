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
  
  @Index('userId', ['userId'])
  @Entity({ schema: 'slack', name: 'itemcarts' })
  export class ItemCarts {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
    
    @Column('varchar', { name: 'userId', length: 100 })
    userId: string;

    @Column('varchar', { name: 'contentId', length: 100 })
    contentId: string;
  
    @Column('varchar', { name: 'category', length: 50 })
    category: string;
  
    @Column('varchar', { name: 'title', length: 100})
    title: string;

    @Column('int', { name: 'price'})
    price: number;

    @Column('int', { name: 'discount'})
    discount: number;

    @Column('varchar', { name: 'thumbnail', length: 200 })
    thumbnail: string;

    @Column('varchar', { name: 'itemCount', length: 100 })
    itemCount: number;

    @Column('varchar', { name: 'options', length: 100 })
    options: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;    
  }
  