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

function isFirstType(obj : FirstType | SecondType | ThirdType) {
    return typeof obj.prop2 === "boolean" && !("prop3" in obj);
}

function isSecondType(obj : FirstType | SecondType | ThirdType) {
    return typeof obj.prop2 === "function";
}

function isThirdType(obj : FirstType | SecondType | ThirdType) {
    return "prop3" in obj;
}

function filter(array: Array<FirstType | SecondType | ThirdType>, type: string) {
    let res: Array<FirstType | SecondType | ThirdType> = [];
    switch (type) {
        case "FirstType":
            array.forEach(x => {
                if (isFirstType(x)) res.push(x);
            });
            break;
        case "SecondType":
            array.forEach(x => {
                if (isSecondType(x)) res.push(x);
            });
            break;
        case "ThirdType":
            array.forEach(x => {
                if (isThirdType(x)) res.push(x);
            });
            break;
    }
    return res;
}

filter(array, 'FirstType');
filter(array, 'SecondType');
filter(array, 'ThirdType');