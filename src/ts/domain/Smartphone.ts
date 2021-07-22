import Buyable from './Buyable';

export default class Smartphone implements Buyable {
  readonly id: number;
  readonly name: string;
  number: number;
  readonly price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.number = 1;
    this.price = this.number * price;
  }
}
