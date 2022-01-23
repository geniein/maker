import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';  
import { ItemOrders } from './ItemOrders';
  
  @Index('orderId', ['orderId'])  
  @Entity({ schema: 'slack', name: 'itemorderdetails' })
  export class ItemOrderDetails {    
    @PrimaryGeneratedColumn()
    id: number;
    // @PrimaryGeneratedColumn('uuid')
    // @Column('varchar',{ name: 'orderId', length: 100,  nullable: false  })
    // orderId: string;
    @ManyToOne(type=>ItemOrders, itmOrd=>itmOrd.orderId, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    })
    orderId: string;
    //@Column('varchar', { name: 'paidId',unique: true, length: 100 })
    @Column('int', { nullable: true  })
    fileIdx: number;

    @Column('varchar', { name: 'filePath', length: 500, nullable: true  })
    filePath: string;

    @Column('varchar', { name: 'fileName', length: 100, nullable: true  })
    fileName: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
    
  }
  