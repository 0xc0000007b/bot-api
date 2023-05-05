import { Controller, Get, Param } from '@nestjs/common';

import { Order } from './entity/order.entity';

import { DbService } from './db.service';
import { Observable } from 'rxjs';
import { Pizza } from './entity/pizza.entity';

@Controller()
export class AppController {
  constructor(private dbService: DbService) {}

  @Get('/pizzas')
  getAllPizzas(): Observable<Pizza[]> {
    return this.dbService.getPizzas();
  }
  @Get('/orders')
  getAllOrders(): Observable<Order[]> {
    return this.dbService.getOrders();
  }
}
