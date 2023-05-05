import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable, of } from 'rxjs';
import { Pizza } from './entity/pizza.entity';
import {
  PizzaInterface,
  ToppingsInterface,
} from './bot/interfaces/pizza.interface';
import { Topping } from './entity/topping.entity';
import { date, time } from './bot/utils/get-date-funtions';
import { PizzaArray, ToppingsArray } from './bot/utils/pizza.array';
import { OrderItem } from './entity/order-item.entity';

@Injectable()
export class DbService {
  constructor(
    @InjectRepository(Order)
    readonly orderRepository: Repository<Order>,
    @InjectRepository(Pizza)
    readonly pizzaRepository: Repository<Pizza>,
    @InjectRepository(OrderItem)
    readonly orderItemRepository: Repository<OrderItem>,
  ) {}
  getOrders(): Observable<Order[]> {
    return from(this.orderRepository.find());
  }
  getPizzas(): Observable<Pizza[]> {
    return from(this.pizzaRepository.find());
  }

  async createOrder(name: string, pizza?: Pizza) {
    const pizza1: Pizza = {
      orderAddress: pizza.orderAddress,
      quantity: pizza.quantity,
      name: pizza.name,
      price: pizza.price,
      toppings: pizza.toppings,
      orderDate: pizza.orderDate,
      orderTime: pizza.orderTime,
    };
    const newOrder: Order = {
      pizza: pizza1,
      customer: name,
      total: PizzaArray.length,
      totalPrice: pizza.price,
    };
    await this.pizzaRepository.save(pizza1);
    await this.orderRepository.save(newOrder);
  }
  async createOrderWitManyPizzas(name: string, pizzaArray: Pizza[]) {
    let totalPrice = pizzaArray.map(
      (pizza) =>
        (totalPrice += pizza.quantity * PizzaArray.length * pizza.price),
    );
    const order: Order = {
      pizza: pizzaArray,
      customer: name,
      total: PizzaArray.length,
      totalPrice: totalPrice,
    };
    await this.pizzaRepository.save(pizzaArray);
    await this.orderRepository.save(order);
  }
}
