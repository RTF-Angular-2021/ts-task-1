/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
*/
// interface IFoo {
//     a: number
//     b: string
// }

// type FooType = {
//     a: number
//     b: string
// };



/** Интерфейсы могут сливаться, если было проинициализированно несколько
 *  интерфесов с одинаковым именем. 
 */
interface IFoo {
    a: number;
}

interface IFoo {
    b: string;
}

// пример слияния
const foo: IFoo = { a: 228, b: "some string" }



/** Type нельзя объявить несколько раз => слияния 
 *  не может быть.
 */

type FooType = {
    a: number
};

// Ошибка
type FooType = {
    b: string;
}


/** Тип может объединять в себе другие типы (примитивные типы, объединения, кортежи)
 */
// примитивный тип
type StringType = string;

// объединения
type UnionType1 = string | number;
type UnionType2 = boolean | bigint;
type UnionType3 = UnionType1 | UnionType2;

// кортежи
type TupleType = [string, number]



