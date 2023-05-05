import { Context } from 'telegraf';
export interface SessionData {
  pizzaType: string;
  customerName: string;
  pizzaPrice: number;
  totalPrice?: number;
  address?: string;
}
export interface BotContextInterface extends Context {
  session: SessionData;
}
