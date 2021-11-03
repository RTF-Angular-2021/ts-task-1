/** Задача 3
 * Требуется реализовать функцию add, которая будет иметь 2 сигнатуры
 * 1 - принимает 2 аргумента: x, y оба типа string и возвращает тип string
 * 2 - принимает 2 аргумента: x, y оба типа number и возвращает тип number
 * использовать тип any для типизации параметров запрещено
 * функция должна возвращать сумму двух аргументов
 */
function add(x: string, y: string): string {
  console.log(x + y);
  return x + y;
}
function add1(x: number, y: number): number {
  console.log(x + y);
  return x + y;
}

add("20", "21"); //2021
add1(20, 21); //41
