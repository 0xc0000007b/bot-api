import { Topping } from '../../entity/topping.entity';

export interface PizzaInterface {
  id?: number;
  name: string;
  toppings?: Topping[];
}
export interface ToppingsInterface {
  topping: string;
}
