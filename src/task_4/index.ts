/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
 * 
1. type нельзя расширить 
interface IFoo {
    c: boolean
} // OK

type FooType = {
    c: boolean
}; // Error

2. в type нельзя наследоваться

interface IFoo extends IFoo2{
    ...
} // OK

type FooType extends FooType2 = {
    ...
}; // Error

3. type нельзя рерализовать - только объявить
*/

interface IFoo1 {
    a: number
    b: string
}
type FooType1 = {
    a: number
    b: string
};

