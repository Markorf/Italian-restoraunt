import { IOrderedItems } from './src/classes/Order';
import { SideDish } from './src/classes/Food/SideDish';
import { Table } from './src/classes/Table';
import { Water } from './src/classes/Drink/Water';
import { NonCarbonatedJuice } from './src/classes/Drink/NonCarbonatedJuice';
import { CarbonatedJuice } from './src/classes/Drink/CarbonatedJuice';
import { Pasta } from './src/classes/Food/Pasta';
import { Pizza } from './src/classes/Food/Pizza';
import { getRandomPrice } from './src/helpers';

const t1 = new Table(1);
const t2 = new Table(2);
const t3 = new Table(3);
const t4 = new Table(4);

const pizza1 = new Pizza('Pizza Capricciosa', getRandomPrice(200, 500));
const pizza2 = new Pizza('Pizza Siciliana', getRandomPrice(200, 500));
const pizza3 = new Pizza('Pizza Capricciosa', getRandomPrice(200, 500));
const pizza4 = new Pizza('Random pizza', getRandomPrice(200, 500));

const pasta1 = new Pasta('Pasta Italiana', getRandomPrice(200, 500));
const pasta2 = new Pasta('Pasta Carbonara', getRandomPrice(200, 500));
const pasta3 = new Pasta('Pasta random', getRandomPrice(200, 500));
const pasta4 = new Pasta('Pasta random 2', getRandomPrice(200, 500));
const pasta5 = new Pasta('Pasta random 5', getRandomPrice(200, 500));

const juice1 = new CarbonatedJuice('Coca cola', getRandomPrice(100, 300), 0.5);
const juice2 = new NonCarbonatedJuice(
  'Ne gazirani sok',
  getRandomPrice(100, 300),
  0.25
);
const juice3 = new CarbonatedJuice(
  'Gazirani sok',
  getRandomPrice(100, 300),
  0.25
);
const juice4 = new NonCarbonatedJuice(
  'Ne gazirani sok',
  getRandomPrice(100, 300),
  0.5
);
const juice5 = new Water('Casa vode', getRandomPrice(100, 300));

const sd1 = new SideDish('Kecap', getRandomPrice(100, 200));
const sd2 = new SideDish('Origano', getRandomPrice(100, 200));
const sd3 = new SideDish('Extra cheese', getRandomPrice(100, 200));

const oItems1: IOrderedItems = {
  foods: [
    {
      food: pizza1,
      sideDishes: [sd1, sd2]
    },
    {
      food: pasta1,
      sideDishes: [sd3]
    }
  ],
  drinks: [juice1, juice1]
};

const oItems2: IOrderedItems = {
  foods: [
    {
      food: pizza2
    },
    {
      food: pasta2
    }
  ],
  drinks: [juice2]
};

const oItems3: IOrderedItems = {
  foods: [
    {
      food: pizza3
    },
    {
      food: pizza3,
      sideDishes: [sd1]
    },
    {
      food: pizza3,
      sideDishes: [sd1]
    }
  ],
  drinks: [juice3, juice4, juice5]
};

try {
  t1.addOrder(oItems1);
  t2.addOrder(oItems2);
  t3.addOrder(oItems3);

  t1.payOrder();
  t3.payOrder();
  // t3.payOrder(); err

  // t2.addOrder({
  //   foods: [
  //     {
  //       food: new Pizza('Capicozza')
  //     }
  //   ]
  // }); // error

  t2.payOrder();
  t2.addOrder(oItems3);
} catch (ex) {
  console.log(ex);
}
