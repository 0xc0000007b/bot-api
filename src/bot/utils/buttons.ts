import { Markup } from 'telegraf';
export const startBtn = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('Меню', 'menu'),
    Markup.button.callback('Список заказов', 'orders'),
  ]);
};
export const menuButtons = () => {
  return Markup.inlineKeyboard(
    [
      Markup.button.callback('Маргарита', 'mg'),
      Markup.button.callback('Пепперони', 'pep'),
      Markup.button.callback('Ананасовая', 'pin'),
      Markup.button.callback('4 Мяса', 'meats'),
      Markup.button.callback('4 сыра', 'cheeses'),
      Markup.button.callback('Сицилийская', 'sicilia'),
      Markup.button.callback('Маринара', 'marinara'),
      Markup.button.callback('Diablo', 'diablo'),
      Markup.button.callback('4 сезона', 'seasons'),
      Markup.button.callback('Con le Cozze', 'cozze'),
      Markup.button.callback('Нью-Йоркская', 'york'),
      Markup.button.callback('Тирольская', 'tirol'),
      Markup.button.callback('Вегетарианская', 'veget'),
      Markup.button.callback('Американа', 'americana'),
      Markup.button.callback('Папайя', 'papaya'),
      Markup.button.callback('Мимоза', 'mimoza'),
      Markup.button.callback('Вальтеллина', 'valt'),
      Markup.button.callback('Капрезе', 'kaprese'),
      Markup.button.callback('Примавера', 'prima'),
      Markup.button.callback('Калифорнийская', 'calif'),
      Markup.button.callback('Средиземномормкая', 'midsea'),
      Markup.button.callback('Своя пицца', 'ctor'),
    ],
    {
      columns: 3,
    },
  );
};
export const dealButtons = () => {
  return Markup.inlineKeyboard([], {
    columns: 2,
  });
};
export const toppingsMenu = () => {
  return Markup.inlineKeyboard(
    [
      Markup.button.callback('Сосиски', 'sausages'),
      Markup.button.callback('Бекон', 'bacon'),
      Markup.button.callback('лук', 'onion'),
      Markup.button.callback('сыр', 'cheese'),
      Markup.button.callback('оливки', 'olive'),
      Markup.button.callback('перец', 'pepper'),
      Markup.button.callback('назад', 'menu'),
    ],
    {
      columns: 2,
    },
  );
};
export const pepperMenu = () => {
  return Markup.inlineKeyboard(
    [
      Markup.button.callback('Болгарский', 'bulgar'),
      Markup.button.callback('чили', 'chilli'),
      Markup.button.callback('Кароинский жнец', 'reaper'),
      Markup.button.callback('Ghost Pepper он же Бхут Долокия  ', 'bhut'),
      Markup.button.callback('7 пот Дугла', 'pot'),
      Markup.button.callback('Trinidad Scorpion Butch T', 'trinidad'),
      Markup.button.callback('назад', 'ctor'),
    ],
    { columns: 2 },
  );
};
export const cheeseButtons = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('Моцарелла', 'moz'),
    Markup.button.callback('Гарганзола', 'gor'),
    Markup.button.callback('Пармизан', 'parmesan'),
  ]);
};
export const onionButtons = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('обычный репчатый', 'standard'),
    Markup.button.callback('сладкий', 'sweet'),
  ]);
};
export const olieveButtons = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('Чёрные оливки', 'black'),
    Markup.button.callback('зеленые', 'green'),
  ]);
};

export const orderButtons = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('завершить заказ', 'order'),
    Markup.button.callback('Список заказов', 'orders'),
    Markup.button.callback('Меню', 'menu'),
    Markup.button.callback('добавить заказ', 'addOrder'),
  ]);
};
