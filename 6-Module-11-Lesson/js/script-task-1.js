// Дан массив с числами
// Напечатайте в консоль только четные
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const item of numbers) {
//   if (item % 2 === 0) {
//     console.log(item);
//     continue;
//   }
// }

// if (numbers && numbers.length) {
//   numbers.forEach(item => {
//     if (item % 2 === 0) console.log(item);
//   });
// }

numbers.filter(n => n % 2 === 0).forEach(n => console.log(n));
