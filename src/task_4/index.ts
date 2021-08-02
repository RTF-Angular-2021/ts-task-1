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

// 1. Интерфейс может быть использован в выражении extends 
interface IFoo {
    x: number
    b: string
}
interface B extends IFoo {
    c: boolean
}

// 2. Интерфейсы могут быть дополнены 
interface IFoo {
    m: boolean;
}
interface IFoo {
    n: symbol;
}

//3. Интерфейс может наследовать тип 
interface IFoo extends FooType { a: number; b: string }

// 3. Тип может использоваться в другом типе 
type newType = FooType

//4. Тип тоже может наследоваться, запись следующая: 
type Point = FooType & { a: number; b: string }

//5. Тип может наследовать интерфейс 
type Foo = IFoo & { y: number; b: string };

//6. После того как тип объявили, его уже нельзя изменить, интерфейс можно

//6. Implements работает для type и для interface
interface Point1 {
    x: number;
    y: number;
}

class SomePoint implements Point1 {
    x = 1;
    y = 2;
}

type Point2 = {
    x: number;
    y: number;
};

class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
}

