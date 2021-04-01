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


/* 
Сами по себе тайп и интерфейс достаточно похожи в плане функционала, однако имеют некоторые различия
*/

/*
Что type, что interface при компиляции не будут появляться в файле .js, т.к. в Javascript нет такого понятия 
как интерфейс и тайп. 
*/


/* 
Небольшой оффтоп для IFoo и FooType
С помощью тайп мы МОЖЕМ создавать расширения примитивных типов, для поддержания читаемости кода
Мы НЕ можем расширять примитивные типа с помощью интерфейсов
*/

type EvenNumber = number

function EvenToOdd(even: EvenNumber) {
    return even + 1;
}

let even: EvenNumber = 4;
let odd = EvenToOdd(even);


// расширение интерфейса
interface IFooChild extends IFoo {
    c: boolean
}

// расширение type
type FooTypeChild = FooType & { 
    c: boolean 
}

/*
Мы можем реализовывать интерфейсы и тайпы в классах, при этом обязываемся реализовать все поля, которые присутствуют в реализуемом интерфейсе
(а иначе компилятор нам и не позволит)
При этом мы не можем наследовать тайпы!!!
Наследовать интерфейсы мы можем только в другом ИНТЕРФЕЙСЕ (пример выше)
*/

class FooClass implements IFoo {
    a: number;
    b: string;
    constructor(a: number, b: string) {
        this.a = a;
        this.b = b;
    }
}
