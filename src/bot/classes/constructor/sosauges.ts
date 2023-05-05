import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { BotContextInterface } from '../../interfaces/context.interface';
import { Markup, Telegraf } from 'telegraf';
import { toppingsMenu } from '../../utils/buttons';
import { DbService } from '../../../db.service';
import { addTiDb } from '../../utils/db';

@Update()
export class SasaugesMenu {
  constructor(
    @InjectBot() private bot: Telegraf<BotContextInterface>,
    private db: DbService,
  ) {}
  @Action('sausages')
  sendSasMenu(ctx: BotContextInterface) {
    ctx.reply(
      'Сосиски это хороший выбор, потому что этот один из тех ингридиентов, котор могут подойти к любой пицце, кроме ананасовой',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('sausages');
  }
}
