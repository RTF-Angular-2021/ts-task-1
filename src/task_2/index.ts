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

type typeSystem = keyof typeof System;

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

type ArrayItem = FirstType | SecondType | ThirdType;

function filter(array: ArrayItem[], type: 'FirstType' | 'SecondType' | 'ThirdType'): ArrayItem[] {
    return array.filter(item => {
        if (type === "ThirdType" && (typeof (item as ThirdType).prop3 === "number")) {
            return item;
        } else if (type === "SecondType" && (typeof (item as SecondType).prop2 !== "boolean")) {
            return item;
        } else if (type === "FirstType" && (typeof (item as FirstType).prop2 === "boolean" && lengthObject(item) === 2)) {
            return item;
        } else {
            return false;
        }
    });
}

function lengthObject(item: object): number {
    let length = 0;
    for (let i in item) {
        length++
    }  
    return length;
}

filter(array, 'FirstType');
filter(array, 'SecondType');
filter(array, 'ThirdType');

