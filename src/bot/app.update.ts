import {
  Action,
  Command,
  Ctx,
  Hears,
  InjectBot,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';
import { BotContextInterface } from './interfaces/context.interface';
import { menuButtons, startBtn } from './utils/buttons';
import { PizzaArray, ToppingsArray } from './utils/pizza.array';
import { date, time } from './utils/get-date-funtions';
import { DbService } from '../db.service';
import { Pizza } from '../entity/pizza.entity';
import { Order } from '../entity/order.entity';
import { CalcTimeService } from '../calc-time.service';

@Update()
export class AppUpdate {
  private id: number = 0;

  constructor(
    private readonly timeService: CalcTimeService,
    private readonly dbService: DbService,
    @InjectBot() private readonly bot: Telegraf<BotContextInterface>,
  ) {}
  @Start()
  start(ctx: BotContextInterface) {
    ctx.reply('чтобы увидеть меню, нажмите на кнопку ниже', startBtn());
  }
  @Action('menu')
  sendMenu(ctx: BotContextInterface) {
    ctx.reply(
      'выберите одну из пицц или создайте свою.\nЧтобы заказать одну пиццу, используйте команду - order',
      menuButtons(),
    );
  }
  @Action('order')
  @On('message')
  async sendOrder(
    @Message('text') message: string,
    @Ctx() ctx: BotContextInterface,
  ) {
    if (message === '/custom') {
      ctx.reply(
        'придумай название для пицыы и отправь мне, используя префикс pizza_',
      );
    } else if (message?.startsWith('pizza_')) {
      ctx.reply(
        'сколько она будет стоить? напиши цену, используя префикс price_',
      );
      ctx.session.pizzaType = message.split('_')[1];
    } else if (Number(message?.split('_')[1]) <= 100) {
      return 'невозможна такая цена. у=цеена минимум 100';
    } else if (Number(message?.split('_')[1]) > 100) {
      ctx.reply('цена сохрвнена');
      ctx.session.pizzaPrice = Number(message.split('_')[1]);

      ctx.reply(
        'нажми на одну из команд\n\n' +
          '/one - сохранить чтобы заказать только эту, либо нажми на кнопку. чтобы добавить еще заказ, а потом вызови коанду /save, чтобы заказать все свои пиццы',
        Markup.inlineKeyboard([Markup.button.callback('Меню', 'menu')]),
      );
      PizzaArray.push({
        orderAddress: ctx.session.address,
        quantity: 1,
        name: ctx.session.pizzaType,
        price: ctx.session.pizzaPrice,
        orderDate: date,
        orderTime: time,
      });
    } else if (message === '/save') {
      ctx.reply('Введите ваше имя, используя префикс n_');
    } else if (message?.startsWith('n_')) {
      ctx.session.customerName = message.split('_')[1];
      await ctx.reply('введите адрес доставки, используя префик add_');
    } else if (message.startsWith('add_')) {
      const order: Order = {
        pizza: PizzaArray,
        customer: ctx.session.customerName,
        total: PizzaArray.length,
        totalPrice: ctx.session.pizzaPrice * PizzaArray.length,
      };

      await this.dbService.orderRepository.save(order);
      await this.dbService.pizzaRepository.save(
        PizzaArray.map((pizza) => pizza),
      );
      const deliveryTime: number = await this.timeService
        .getTime(message.split('_')[1].toLowerCase())
        .then();

      await ctx.reply(`заказ будет досьавлен через ${deliveryTime} минут`);
      while (PizzaArray.length) {
        PizzaArray.pop();
      }
      ctx.session.customerName = '';
    } else if (message === '/one') {
      await ctx.reply('Введите ваше имя, используя префикс n_');
      if (message?.startsWith('n_')) {
        await ctx.reply('введите адрес доставки, используя префик add_');
      } else if (message.startsWith('add_')) {
        ctx.session.address = message.split('_')[1];
        const pizza: Pizza = {
          orderAddress: ctx.session.address,
          name: ctx.session.pizzaType,
          orderDate: date,
          orderTime: time,
          price: ctx.session.pizzaPrice,
          quantity: 1,
        };
        const order: Order = {
          customer: ctx.session.customerName,
          pizza: pizza,
          total: 1,
          totalPrice: ctx.session.pizzaPrice,
        };
        await this.dbService.orderRepository.save(order);
        await this.dbService.pizzaRepository.save(pizza);
        const deliveryTime: number = await this.timeService
          .getTime(message.split('_')[1].toLowerCase())
          .then();
        await ctx.reply(`заказ будет досьавлен через ${deliveryTime} минут`);
      }
    }
  }
}
