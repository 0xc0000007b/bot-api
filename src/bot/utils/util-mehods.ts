import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';
import { BotContextInterface } from '../interfaces/context.interface';

@Update()
export class UtilMethods {
  constructor(
    @InjectBot() private readonly bot: Telegraf<BotContextInterface>,
  ) {}
  @Action('add')
  addToArray(ctx: BotContextInterface) {
    ctx.reply(
      'добавлено',
      Markup.inlineKeyboard([
        Markup.button.callback('Назад', 'ctor'),
        Markup.button.callback('завершить заказ', 'end'),
      ]),
    );
  }
}
