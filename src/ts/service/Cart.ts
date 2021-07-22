import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (item.hasOwnProperty('number')) {
      const index = this._items.indexOf(item);
      const number = this._items[index]?.number;

      if (number) {
        const price = this._items[index].price;
        this._items[index].number = number + 1;
        this._items[index].price = price + price / number;
        return;
      }
    }

    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  deleteItem(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);
    const { number, price } = this._items[index];

    if (number && number > 1) {
      this._items[index].number = number - 1;
      this._items[index].price = price - price / number;
      return;
    }

    this._items.splice(index, 1);
  }
}
