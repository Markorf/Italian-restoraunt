import { IOrderedItems, Order } from './Order';

export class Table {
  private orderList: Order[] = [];

  constructor(public tableNumber: number) {}

  addOrder(orderedItems: IOrderedItems) {
    if (!this.areOrdersPayed) {
      throw new Error(
        'Nije moguće izdati novu porudžbinu jer prethodna nije plaćena'
      );
    }
    this.orderList.push(new Order(this.tableNumber, orderedItems));
    this.orderList[this.orderList.length - 1].createBill();
  }

  payOrder() {
    if (this.orderList.length > 0) {
      if (this.areOrdersPayed) {
        throw new Error('Sve porduzbine su vec placene');
      }
      this.orderList[this.orderList.length - 1].bill = null;
    }
  }

  get areOrdersPayed() {
    if (this.orderList.length === 0) {
      return true;
    }
    for (const order of this.orderList) {
      if (order.bill !== null) {
        return false;
      }
    }
    return true;
  }
}
