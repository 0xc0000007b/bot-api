import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';
import { BotContextInterface } from '../../interfaces/context.interface';
import { DbService } from '../../../db.service';
import { addTiDb } from '../../utils/db';
import { pepperMenu } from '../../utils/buttons';
@Update()
export class Peppers {
  constructor(
    @InjectBot() private bot: Telegraf<BotContextInterface>,
    private db: DbService,
  ) {}
  @Action('pepper')
  sendPepperMenu(ctx: BotContextInterface) {
    ctx.reply('выбурите тип перца', pepperMenu());
  }
  @Action('bhut')
  sendBhutDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://s.ecrater.com/stores/443039/5c48003adb065_443039b.jpg',
    );
    ctx.reply(
      'Перец Бхут Джолокия (Bhut Jolokia) – один из самых острых перцев в мире, острота которого превышает 1 миллиона единиц по шкале Сковилла. Долгое время он занимал первую строчку в рейтинге самых острых перцев. Если вы любите острое, то вам однозначно стоаит его попробовать',
      Markup.inlineKeyboard([Markup.button.callback('Добавить', 'add')]),
    );
    addTiDb('bhut');
  }
  @Action('chilli')
  sendChilliDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=a8c94a41c8a1bbc058eef662772e7b7b55061049-9182252-images-thumbs&n=13',
    );
    ctx.reply(
      'Самый известный из жгучмх перцев. В честь него даже была названа группа Red Hot Chilli Peppers',
      Markup.inlineKeyboard([Markup.button.callback('Добавить', 'add')]),
    );
    addTiDb('chili');
  }
  @Action('reaper')
  sendReaperDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=26c3986d0f4238cf9cee02d505d2c045d772e9ff-8318446-images-thumbs&n=13',
    );
    ctx.reply(
      '«Кароли́нский жнец» — сорт перца чили из рода Капсикум. В августе 2013 года был занесён в книгу рекордов Гиннесса как самый острый перец в мире',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('reaper');
  }
  @Action('pot')
  sendPotDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://alexandertokarev.ru/pictures/7-pot-douglah-2021--08@2x.jpg',
    );
    ctx.reply(
      'Без сомнения, это растение входит в  десятку самых острых сортов перца, однако его внешний вид и вкус отличаются от других. Шкурка этого перца шоколадного цвета вместо обычного пожарно-красного, а вкус не только фруктовый, но и даже немного ореховый. Поэтому 7 Pot Douglah в своем роде уникальное явление как по внешнему виду, так и по вкусу. И по остроте тоже.',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('7 pot douglah');
  }
  @Action('trinidad')
  sendButchDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://alexandertokarev.ru/pictures/7-pot-douglah-2021--08@2x.jpg',
    );
    ctx.reply(
      'Сорт острого перца, который является предыдущим рекордсменом по остроте. От этого сорта реально добиться 2 млн сковиллов остроты при соблюдении специальной агротехники. Растение высотой до 90 см при выращивании в теплице. В домашних условиях высота не более 60 см в горшке от 3-х литров. Острота экстремальная. Будьте острожны!',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('trinidad');
  }
  @Action('bulgar')
  sendBulgarDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/get-mpic/6259567/img_id3986233258760071963.jpeg/orig',
    );
    ctx.reply(
      'Перец Болгарский (лат. Bulgarian pepper)\n' +
        'Болгарский перец — это одна из разновидностей перца стручкового. Кустарник является многолетним, но выращивается как однолетнее растение',
      Markup.inlineKeyboard([
        Markup.button.callback('Добавить', 'add'),
        Markup.button.callback('Назад', 'ctor'),
      ]),
    );
    addTiDb('trinidad');
  }
}
