import { Item } from '../Item';

export abstract class Drink extends Item {
  constructor(
    public name: string,
    public price: number,
    public volume?: number
  ) {
    super(name, price);
  }
}
