import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';
import { Pizza } from './pizza.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  customer: string;

  @ManyToMany(() => Pizza)
  @JoinTable()
  pizza: Pizza | Pizza[];

  @Column()
  total: number;

  @Column()
  totalPrice?: number;
}
