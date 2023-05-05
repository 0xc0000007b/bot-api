import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Topping } from './topping.entity';

@Entity()
export class Pizza {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  quantity: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToMany(() => Topping)
  @JoinTable()
  toppings?: Topping[];

  @Column()
  orderDate: string;
  @Column()
  orderAddress: string;
  @Column()
  orderTime: string;
}
