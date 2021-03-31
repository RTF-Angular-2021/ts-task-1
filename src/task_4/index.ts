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
Interface лишь описывает функциональность, а то, что реализует этот интерфейс 
должен определить эту функциональность
*/

interface IFoo {
    a: number
    b: string
}

let Tomato: IFoo = {
    a:300,
    b: 'Sold'
}


/*
Тип не может быть изменен после того как уже создан. А интерфейс может.
(То есть Type не может иметь несколько объявлений). Если два интерфейса имеют одно и то же имя,
то они сливаются
*/

type Potato = {}
type Potato = {cost: number} //ошибка


interface Window {
    x: string
}

interface Window {
    y: {}
}


