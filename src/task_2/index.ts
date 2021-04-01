/** Задача 2
 * Требуется реализовать функцию filter, которая будет принимать
 * массив с объектами 3х типов
 * наименование типа
 * возврщать массив с объектами, которые имеют тип, указанный во втором аргументе
*/

enum System {
    Linux = 0,
    Window = 1,
    MacOS = 2,
}

type FirstType = {
    prop1: string,
    prop2: boolean,
}

type SecondType = {
    prop1: typeof undefined,
    prop2: () => Date,
}

type ThirdType = {
    prop1: string,
    prop2: boolean,
    prop3: System,
}
 
const obj1: FirstType = {
    prop1: "Привет, РТФ!",
    prop2: false,
};

const obj2: FirstType = {
    prop1: "Привет, УрФУ!",
    prop2: true,
};

const obj3: FirstType = {
    prop1: "Привет, мир!",
    prop2: true,
};

const obj4: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date();
    }
};

const obj5: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date(2021, 3, 1);
    }
};

const obj6: ThirdType = {
    prop1: "Cats",
    prop2: true,
    prop3: System.Linux
};

const obj7: ThirdType = {
    prop1: "Dogs",
    prop2: true,
    prop3: System.MacOS
};

const array = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];

function filter(array: Array<FirstType | SecondType | ThirdType>, type: string) {
    return array.filter((x): x is FirstType | SecondType | ThirdType => typeof x === type);
}

filter(array, 'FirstType');
filter(array, 'SecondType');
filter(array, 'ThirdType');
