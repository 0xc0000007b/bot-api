import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db.service';
import { join } from 'path';
import { Pizza } from './entity/pizza.entity';
import { Order } from './entity/order.entity';

import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { TOKEN } from './bot/utils/config';
import { AppUpdate } from './bot/app.update';

import { BotModule } from './bot/bot.module';
import { OrderItem } from './entity/order-item.entity';
import { Topping } from './entity/topping.entity';
import { CalcTimeService } from './calc-time.service';
const sessions = new LocalSession({
  database: 'session_db.json',
});
@Module({
  imports: [
    TelegrafModule.forRoot({
      token: TOKEN,
      middlewares: [sessions.middleware()],
    }),
    TypeOrmModule.forFeature([Pizza, Order, OrderItem, Topping]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'orderz',
      dropSchema: false,
      logging: true,
      synchronize: false,
      entities: ['./dist/**/*.entity.{js,ts}'],
      migrations: ['./dist/**/*.migration.{js,ts}'],
      migrationsRun: false,
    }),

    ConfigModule.forRoot(),
    BotModule,
  ],
  controllers: [AppController],
  providers: [DbService, AppUpdate, CalcTimeService],
})
export class AppModule {}
