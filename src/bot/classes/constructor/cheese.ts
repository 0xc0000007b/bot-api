import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { BotContextInterface } from '../../interfaces/context.interface';
import { Markup, Telegraf } from 'telegraf';
import { cheeseButtons } from '../../utils/buttons';

@Update()
export class CheeseMenu {
  constructor(@InjectBot() private bot: Telegraf<BotContextInterface>) {}
  @Action('cheese')
  sendCheeseMenu(ctx: BotContextInterface) {
    ctx.reply('выберите сорт сыра для добавления', cheeseButtons());
  }
  @Action('moz')
  sendMozDesc(ctx: BotContextInterface) {
    ctx.reply(
      'Моцарелла',
      Markup.inlineKeyboard([Markup.button.callback('Добавить', 'add')]),
    );
  }
  @Action('gor')
  sendGorDesc(ctx: BotContextInterface) {
    ctx.reply(
      'горганзола',
      Markup.inlineKeyboard([Markup.button.callback('Добавить', 'add')]),
    );
  }
  @Action('parmesan')
  sendPorDesc(ctx: BotContextInterface) {
    ctx.reply(
      'пармизан',
      Markup.inlineKeyboard([Markup.button.callback('Добавить', 'add')]),
    );
  }
}
