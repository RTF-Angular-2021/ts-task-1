/** Задача 3
 * Требуется реализовать функцию add, которая будет иметь 2 сигнатуры
 * 1 - принимает 2 аргумента: x, y оба типа string и возвращает тип string
 * 2 - принимает 2 аргумента: x, y оба типа number и возвращает тип number
 * использовать тип any для типизации параметров запрещено
 * функция должна возвращать сумму двух аргументов
*/
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: string | number, y: string | number) : string | number {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
}

add('20', '21'); //2021
add(20, 21); //41