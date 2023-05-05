import { PizzaArray, ToppingsArray } from './pizza.array';
import { Pizza } from '../../entity/pizza.entity';
let id: number = 0;
export const addTiDb = (toppingType: string) => {
  ToppingsArray.push({
    // @ts-ignore
    id: id++,
    name: toppingType,
  });
};
export const addToPizzas = (pizza: Pizza) => PizzaArray.push(pizza);
