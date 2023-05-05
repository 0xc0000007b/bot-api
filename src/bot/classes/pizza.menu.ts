import { Action, InjectBot, Update } from 'nestjs-telegraf';
import { BotContextInterface } from '../interfaces/context.interface';
import { dealButtons, orderButtons } from '../utils/buttons';
import { Telegraf } from 'telegraf';
import { DbService } from '../../db.service';
import { addToPizzas } from '../utils/db';
import { date, time } from '../utils/get-date-funtions';
const types: string[] = ['mg', 'pep'];
@Update()
export class PizzaMenu {
  id: number = 0;
  constructor(
    private dbService: DbService,
    @InjectBot() private readonly bot: Telegraf<BotContextInterface>,
  ) {}

  @Action(`mg`)
  sendMgDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Маргарита» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
        'но позже попало на королевский стол.\nЧтобы попасть в меню, нажми на команду - /menu',
      orderButtons(),
    );
    ctx.session.pizzaType = 'margarita';
    ctx.session.pizzaPrice = 400;
  }
  @Action('pep')
  sendPepDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Пепперони» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
        'но позже попало на королевский стол.\nЧтобы попасть в меню, нажми на команду - /menu',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 500;
    ctx.session.pizzaType = 'Пепперони';
  }
  @Action('pin')
  sendHawDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Ананасовая» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
        'но позже попало на королевский стол.\nЧтобы попасть в меню, нажми на команду - /menu',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 400;
    ctx.session.pizzaType = 'Ананасовая';
  }
  @Action('meat')
  sendMeatDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «4 мяса» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
        'но позже попало на королевский стол.\nЧтобы  попасть в меню, нажми на кнпку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 800;
    ctx.session.pizzaType = '4 мяса';
  }
  @Action('cheeses')
  sendCheesesDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=059c6a6b3502917f0821d609007748a494dbf474-8514130-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Четыре сыра» - Настоящий праздник для любителей сыров. Насыщенный вкус этой пицце придают 4 разных сорта сыра, входящие в начинку. Для приготовления пиццы «Четыре сыра» используют: моцареллу, пармезан, сыр фонтина  и пикантный дор-блю.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 600;
    ctx.session.pizzaType = '4 сыра';
  }
  @Action('sicilia')
  sendSicDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=55122e56503b88762ba5ab21b894446b3b6eb7bd-6955462-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Сицилийская» - Отличается квадратной формой и толстой основой. Название говорит само за себя о ее происхождении, в качестве начинки выступают анчоусы, а вот сыр кладут под соус..\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 900;
    ctx.session.pizzaType = 'Сицилийская';
  }
  @Action('marinara')
  sendMarDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=f99ef8c074b7b34d7b0b9d3a8a2b6283b933c06d-8266553-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Маринара» - Хотя в названии и явно присутствует морская тема, морепродуктов в этой пицце нет. «Маринара» это соус, который состоит из помидоров, лука, чеснока и пряных трав.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 700;
    ctx.session.pizzaType = 'Маринара';
  }
  @Action('diablo')
  sendDiabloDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Diablo» - Вариант для тех, кто любит поострее. Родина этой пиццы — Калабрия. В составе острый калабрийский перец, сыры моцарелла и пармезан, салями и шампиньоны.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 600;
    ctx.session.pizzaType = 'Diablo';
  }
  @Action('seasons')
  sendSeasonsDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=26e3eb1c640b6581f20546260ebc7e6840ea6c5a-7543894-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «4 Сезона» - Идея создания этой пиццы пришла в голову повару, который решил собрать на одной лепешке побольше своих любимых ингредиентов: томаты, морепродукты, грибы и ветчину. Но он не хотел хаотично смешивать все продукты, и нашел оригинальное решение — разделить лепешку на 4 сектора, вроде как времена года на календаре.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 700;
    ctx.session.pizzaType = '4 Сезона';
  }
  @Action('cozze')
  sendCozzeDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Con Le Cozze» - Пицца для любителей морепродуктов. Центральным ингредиентом являются мидии, петрушка, оливковое масло и чеснок. А вот традиционного для пиццы сыра здесь нет.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 1100;
    ctx.session.pizzaType = 'Con Le Cozze';
  }
  @Action('york')
  sendYorkDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Нью-Йоркская» -Эта американская пицца готовится при несколько более низкой температуре, за счет чего имеет тонкую и хрустящую корочку. А начинка более чем проста: томатный соус и моцарелла.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 700;
    ctx.session.pizzaType = 'Нью-Йоркская';
  }
  @Action('tirol')
  sendTirolDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Тирольская» - Пицца на тонком тесте с хрустящей корочкой, щедро пропитанная томатным соусом. В начинке: подкопчённая ветчина, оливки, пармезан, томаты.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 800;
    ctx.session.pizzaType = 'Тирольская';
  }
  @Action('veget')
  sendVegetDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Вегеторианская» - Главное в этой пицце то, что определенного рецепта нет, можно использовать смесь любых овощей, на которые сверху натирается любой сыр.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      dealButtons(),
    );
    ctx.session.pizzaPrice = 500;
    ctx.session.pizzaType = 'Вегетарианская';
  }
  @Action('americana')
  sendAmericaDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Американа» - Эта пицца сильно отличается от традиционной итальянской. Обязательными ингредиентами является любой вид мяса. Здесь используют любую колбасу, мясной фарш, обжаренную свинину, бекон. А еще томатный соус, разные овощи и даже фрукты.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 800;
    ctx.session.pizzaType = 'Американа';
  }
  @Action('papaya')
  sendPapayaDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://playboyrussia.com/images/cache/2022/2/10/widen_960_crop_1024_683_0_0_q90_851581_6763e506285253de5acbc6cae.webp',
    );
    ctx.reply(
      'Пицца «Папайя» - Основа — сливочный соус. Начинка состоит из листьев шпината и смесь сыров (обязательно наличие рикотты).\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 600;
    ctx.session.pizzaType = 'Папайя';
  }
  @Action('mimoza')
  sendMimozaDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Мимоза» - Вкусная и сытная закрытая пицца, в основе которой присутствует сливочный соус, томаты, курица и сладкая кукуруза.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 700;
    ctx.session.pizzaType = 'Мимоза';
  }
  @Action('valt')
  sendValtDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Вальтеллина» - Настоящая «итальянка», ведь ее главный компонент — итальянская вяленая говядина, дополненная томатным соусом, свежими томатами, листовой зеленью и пармезаном.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 1000;
    ctx.session.pizzaType = 'Вальтеллина';
  }
  @Action('kapreze')
  sendKaprDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Капрезе» - Имеет свежий лёгкий вкус и яркий вид, а начинка повторяет классический салат капрезе: помидор, кусочки моцареллы и оливки. Все это выкладывается на традиционный томатный соус.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 700;
    ctx.session.pizzaType = 'Капрезе';
  }
  @Action('prima')
  sendPrimaDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Примавера» - Еще одна итальянская пицца, главными ингредиентами которой являются разноцветные овощи, придающие этой пицце весеннее настроение, ведь «Примавера» по-итальянски означает весна. В составе: моцарелла, болгарский перец, чили, цукини, пеперони, паприка, чеснок, томаты и орегано.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 1100;
    ctx.session.pizzaType = 'Примавера';
  }
  @Action('calif')
  sendCalifDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Калифорнийская» - Необычность пиццы в том, что на тонком и мягком тесте громоздиться внушительный список ингредиентов: копченый бекон, обжаренная курица, сыр моцарелла. Сверху выкладываются томаты, авокадо и майонез.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 800;
    ctx.session.pizzaType = 'Калифорнийская';
  }
  @Action('midsea')
  sendMidDesc(ctx: BotContextInterface) {
    ctx.sendPhoto(
      'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    );
    ctx.reply(
      'Пицца «Средиземноморская» - Любимая итальянцами, но все же интернациональная пицца, хотя Италия и Америка уже долго борются за титул называться ее родиной. В начинке — обязательно сырые овощи: томаты, болгарский перец, спаржа и сыр моцарелла.\nЧтобы  попасть в меню, нажми на кнопку "меню"',
      orderButtons(),
    );
    ctx.session.pizzaPrice = 1000;
    ctx.session.pizzaType = 'Средиземноморская';
  }
}
