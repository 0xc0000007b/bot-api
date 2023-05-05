import { Module } from '@nestjs/common';
import { SasaugesMenu } from './classes/constructor/sosauges';
import { Peppers } from './classes/constructor/peppers';
import { PizzaConstructor } from './classes/pizza-constructor';
import { DbService } from '../db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from '../entity/pizza.entity';
import { Order } from '../entity/order.entity';
import { Topping } from '../entity/topping.entity';
import { CheeseMenu } from './classes/constructor/cheese';
import { PizzaMenu } from './classes/pizza.menu';
import { UtilMethods } from './utils/util-mehods';
import { OnionMenu } from './classes/constructor/onion';
import { Orders } from './classes/orders';
import { BaconMenu } from './classes/constructor/backon';
import { OlieveMenu } from './classes/constructor/olieve';
import { OrderItem } from '../entity/order-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza, Order, OrderItem, Topping])],
  providers: [
    DbService,
    SasaugesMenu,
    Peppers,
    PizzaConstructor,
    CheeseMenu,
    PizzaMenu,
    UtilMethods,
    OnionMenu,
    Orders,
    BaconMenu,
    OlieveMenu,
  ],
})
export class BotModule {}
