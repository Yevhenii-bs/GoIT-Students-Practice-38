// Перемешивание
// Напишите функцию shuffle,
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6];

function randomCompare() {
  return Math.random() - 0.5;
}

const shuffle = arr => {
  return [...arr].sort(randomCompare);
};

console.log(shuffle(numbers));
console.log(numbers);
