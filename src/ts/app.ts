import Cart from './service/Cart';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

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

cart.add(movie1);
cart.add(movie2);

console.log(cart.items);

cart.deleteItem(1010);

console.log(cart.items);

cart.add(smartphone);
cart.add(smartphone);

console.log(cart.items);

cart.deleteItem(1011);
cart.deleteItem(1011);

console.log(cart.items);

cart.deleteItem(1009);

console.log(cart.items);
