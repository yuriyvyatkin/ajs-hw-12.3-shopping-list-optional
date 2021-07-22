import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

const cart = new Cart();
const movie1 = new Movie(
  1009,
  'Мстители',
  'The Avengers',
  'IMAX',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17',
  2000,
);
const movie2 = new Movie(
  1010,
  'Мстители',
  'The Avengers',
  'IMAX',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17',
  2000,
);
const smartphone = new Smartphone(1011, 'iPhone', 2000);

test('method "add" of class "Cart" should work correctly', () => {
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.items).toEqual([movie1, movie2]);
  cart.add(smartphone);
  cart.add(smartphone);
  const expected = { id: 1011, name: 'iPhone', number: 2, price: 4000 };
  expect(cart.items[2]).toEqual(expected);
});

test('method "deleteItem" of class "Cart" should work correctly', () => {
  cart.deleteItem(1011);
  const expected = { id: 1011, name: 'iPhone', number: 1, price: 2000 };
  expect(cart.items[2]).toEqual(expected);
  cart.deleteItem(1011);
  expect(cart.items).toEqual([movie1, movie2]);
  cart.deleteItem(1010);
  expect(cart.items).toEqual([movie1]);
  cart.deleteItem(1009);
  expect(cart.items).toEqual([]);
});
