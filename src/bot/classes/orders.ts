import {
  Action,
  Command,
  Ctx,
  InjectBot,
  Message,
  On,
  Update,
} from 'nestjs-telegraf';
import { BotContextInterface } from '../interfaces/context.interface';
import { Markup, Telegraf } from 'telegraf';
import { DbService } from '../../db.service';
import { Pizza } from '../../entity/pizza.entity';
import { PizzaArray, ToppingsArray } from '../utils/pizza.array';
import { date, time } from '../utils/get-date-funtions';

@Update()
export class Orders {
  pizzas: Pizza[] = [];

  constructor(
    @InjectBot() private bot: Telegraf<BotContextInterface>,
    private readonly dbService: DbService,
  ) {
    dbService.getPizzas().subscribe((pizzas) => (this.pizzas = pizzas));
  }

  @Action('orders')
  showOrders(ctx: BotContextInterface) {
    return this.pizzas.length > 0
      ? `Ваши заказы:\n\n${this.pizzas
          .map(
            (pizza) =>
              `номер заказа: ${pizza.id}\nдата заказа: ${pizza.orderDate}\nвремя доставки: ${pizza.orderTime}\nназвание: ${pizza.name}`,
          )
          .join('\n\n')}`
      : 'ваш список заказов пуст';
  }

  @Action('addOrder')
  addOrder(@Ctx() ctx: BotContextInterface) {
    let pizza1;
    PizzaArray?.filter((pizza) => (pizza1 = pizza));
    const price = pizza1?.price;
    PizzaArray?.push({
      orderAddress: ctx.session.address,
      quantity: 1,
      name: ctx.session.pizzaType,
      toppings: ToppingsArray,
      price: price,
      orderDate: date,
      orderTime: time,
    });
    ctx.reply('пицца успешно добавлена');
  }
}
