import { IOrderedItems } from './Order';
import { getFormatedDate } from '../helpers';

export class Bill {
  public date = getFormatedDate();

  constructor(
    public tableNumber: number,
    public totalPrice: number,
    public orderedItems: IOrderedItems
  ) {
    console.log(
      `Racun: datum ${this.date} sto broj ${
        this.tableNumber
      }, naplata ${this.totalPrice.toFixed(2)} rsd`
    );
  }
}
