import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Pizza } from './pizza.entity';
import { Topping } from './topping.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order)
  order?: Order;

  @ManyToOne(() => Pizza)
  pizza: Pizza;

  @ManyToMany(() => Topping, { cascade: true })
  @JoinTable()
  toppings: Topping[];
}
