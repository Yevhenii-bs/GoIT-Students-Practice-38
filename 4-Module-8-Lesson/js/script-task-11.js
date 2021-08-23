/**
 * https://goit.global/javascript/ru/v1/module-02/scope.html
 * https://goit.global/javascript/ru/v1/module-04/closures.html
 * Измените анонимную функцию которая присваивается к result[i]
 * так, чтобы в результате в консоли мы послучили числа от 0 до 4 включительно
 * Изменять можно только функцию 
 * function () {
    console.log(i);
  };
 */

const result = [];

for (var i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}

result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4