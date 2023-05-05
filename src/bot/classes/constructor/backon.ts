import {
  Action,
  Ctx,
  Hears,
  InjectBot,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';

import { message } from 'telegraf/filters';
import { BotContextInterface } from '../../interfaces/context.interface';

@Update()
export class BaconMenu {
  private id: number = 0;
  constructor(
    @InjectBot() private readonly bot: Telegraf<BotContextInterface>,
  ) {}

  @Action('bacon')
  sendMenu(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=ee353dba2314afe64fc45f0ec807eb28a74618da-8310601-images-thumbs&n=13',
    );
    ctx.reply(
      'Бекон обожают люди во многих странах мира, однако далеко не все знают, каких он бывает видов, что нужно для приготовления популярного лакомства дома и даже, казалось бы, самое простое – мясо каких животных служит основой для этого продукта',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
  }
}
