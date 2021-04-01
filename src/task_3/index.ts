/** Задача 3
 * Требуется реализовать функцию add, которая будет иметь 2 сигнатуры
 * 1 - принимает 2 аргумента: x, y оба типа string и возвращает тип string
 * 2 - принимает 2 аргумента: x, y оба типа number и возвращает тип number
 * использовать тип any для типизации параметров запрещено
 * функция должна возвращать сумму двух аргументов
*/
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any
{
    return x+y;
}

add('20', '21'); //2021
add(20, 21); //41