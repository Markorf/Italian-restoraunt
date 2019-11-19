import { Food } from './Food/Food';
import { SideDish } from './Food/SideDish';
import { Drink } from './Drink/Drink';
import { Bill } from './Bill';
import { getFormatedDate } from '../helpers';

export interface IOrderedItems {
  foods?: { food: Food; sideDishes?: SideDish[] }[];
  drinks?: Drink[];
}

export class Order {
  public bill: Bill | null = null;
  private date = getFormatedDate();

  constructor(public tableNumber: number, public orderedItems: IOrderedItems) {
    console.log(
      `Porudzbina: datum: ${this.date}, sto broj ${this.tableNumber}`
    );
  }

  createBill() {
    let totalPrice = 0;
    this.orderedItems.foods &&
      this.orderedItems.foods.forEach(foodObject => {
        foodObject.sideDishes &&
          foodObject.sideDishes.forEach(sideDish => {
            foodObject.food.price += sideDish.price;
          });
        totalPrice += foodObject.food.price;
      });
    this.orderedItems.drinks &&
      this.orderedItems.drinks.forEach(drink => {
        totalPrice += drink.price;
      });
    this.bill = new Bill(this.tableNumber, totalPrice, this.orderedItems);
  }
}
