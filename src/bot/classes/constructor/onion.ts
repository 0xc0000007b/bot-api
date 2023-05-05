import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';
import { BotContextInterface } from '../../interfaces/context.interface';
import { dealButtons, onionButtons } from '../../utils/buttons';
import { PizzaArray, ToppingsArray } from '../../utils/pizza.array';
import { date, time } from '../../utils/get-date-funtions';
import { addTiDb } from '../../utils/db';

@Update()
export class OnionMenu {
  constructor(
    @InjectBot() private readonly bot: Telegraf<BotContextInterface>,
  ) {}
  @Action('onion')
  sendOnionMenu(ctx: BotContextInterface) {
    ctx.reply('выберите сорт лука', onionButtons());
  }
  @Action('standard')
  sendMgDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=8ecb3be0237ff8c98c16cd52e02beb5c6cbbaf5a-5434646-images-thumbs&n=13',
    );
    ctx.reply(
      'обычный лук - хорошо помогает во время разного ррода эпидемий',
      Markup.inlineKeyboard([
        Markup.button.callback('добавить', 'add'),
        Markup.button.callback('назад', 'onions'),
      ]),
    );
    addTiDb('лук');
  }

  @Action('sweet')
  sendPepDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=59f5e4cb42ff86ab9a979c466ff52b9c-5450752-images-thumbs&n=13',
    );
    ctx.reply(
      'слфадкий лук -  Лук сладких сортов обладает сочным, сладковатым вкусом и очень часто используется как добавка для салатов.',
      Markup.inlineKeyboard([
        Markup.button.callback('добавить', 'add'),
        Markup.button.callback('назад', 'onions'),
      ]),
    );
    addTiDb('сладкий лук');
  }
}
