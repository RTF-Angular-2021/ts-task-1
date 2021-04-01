/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
*/
interface IFoo {
    a: number
    b: string
}
 
type FooType = {
    a: number
    b: string
};


 //  1) Классы не могут наследоваться от type

 //  2) С помощью type можно создавать объединение типов
 type example = number;

 type UnionWithType = FooType | example;
 type UnionWithInterface = FooType | IFoo;
 
 //  3) В интерфейсы можно добавить поля после создания, а в type нет
 //  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

 //  4) Интерфейсы не могут расширять объединение type
