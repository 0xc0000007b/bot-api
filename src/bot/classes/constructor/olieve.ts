import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { BotContextInterface } from '../../interfaces/context.interface';
import { Markup, Telegraf } from 'telegraf';
import { olieveButtons } from '../../utils/buttons';
import { addTiDb } from '../../utils/db';

@Update()
export class OlieveMenu {
  constructor(@InjectBot() private readonly: Telegraf<BotContextInterface>) {}
  @Action('olive')
  sendOliveMenu(ctx: BotContextInterface) {
    ctx.reply('выберите один из видов', olieveButtons());
  }
  @Action('black')
  sendBlackDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=5d7f61d3be14e4b92d617f46b27ceb31be54c1fc-8497429-images-thumbs&n=13',
    );
    ctx.reply(
      'Созревшие маслины содержат много полезных веществ и благотворно влияют на организм. Употребление их в пищу помогает укрепить иммунитет, улучшить кровообращение и общее состояние сердечно-сосудистой системы и ЖКТ. Предотвращают развитие сахарного диабета. Снижают уровень холестерина, оказывают тонизирующее действие на организм. Укрепляют суставы и соединительные ткани. Выводят из организма шлаки и токсины. Незаменимы маслины и при похудении — они отлично снижают аппетит.\n' +
        'Благотворно влияют маслины на мужской организм — они помогают выработке мужского гормона тестостерона.\n' +
        'В косметологии маслины используются в качестве компонентов косметических средств по уходу за кожей и волосами. Употребление в пищу делает волосы более здоровыми, а кожу молодой и упругой.',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('оливки');
  }
  @Action('green')
  sendGreenDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=99ea58ad9310684899c0bf207b915e3cec38a824-9181527-images-thumbs&n=133',
    );
    ctx.reply(
      'Созревшие маслины содержат много полезных веществ и благотворно влияют на организм. Употребление их в пищу помогает укрепить иммунитет, улучшить кровообращение и общее состояние сердечно-сосудистой системы и ЖКТ. Предотвращают развитие сахарного диабета. Снижают уровень холестерина, оказывают тонизирующее действие на организм. Укрепляют суставы и соединительные ткани. Выводят из организма шлаки и токсины. Незаменимы маслины и при похудении — они отлично снижают аппетит.\n' +
        'Благотворно влияют маслины на мужской организм — они помогают выработке мужского гормона тестостерона.\n' +
        'В косметологии маслины используются в качестве компонентов косметических средств по уходу за кожей и волосами. Употребление в пищу делает волосы более здоровыми, а кожу молодой и упругой.',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('оливки');
  }
}
