import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { BotContextInterface } from '../interfaces/context.interface';
import { toppingsMenu } from '../utils/buttons';

@Update()
export class PizzaConstructor {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}
  @Action('ctor')
  sendCtor(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=6c7558e2f83cfb01ef598d0c5629b581-5209520-images-thumbs&n=13',
    );
    ctx.reply(
      'Добро пожаловать в конструктор. тут вы можете выбрать наяинку и добавить ее в пиццу',
      toppingsMenu(),
    );
  }
}
