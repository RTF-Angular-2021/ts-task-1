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
Приведу аналогию, пожалуй. Type это struct в C#, только не имеющий инициализатора/конструктора
Class can implement Interface, types
Class can be extended by Interface and classes
Variable can implement type
Variable cannot be extended by any of type or interface
*/

interface IAnimal{
    DoSound(): void
    name: string
    sex: string //better enum
}

type DogType ={
    breed: string;
    name: string|Number;
    doSound(): void;
}

class Dog implements IAnimal{
    DoSound(): void {
        console.log("Whoooff!");
    }
    name: "Axel";
    sex: "Male";
    breed: "HolyWater";
}

//But cannot compile class when extending type

class DogT extends DogType{ //Compile error
    doSound(): void {
        throw new Error("Method not implemented.");
    }
    breed: string;
    name: 21312;
    
}

//At the same time, can compile class when implementing type

class DogTI implements DogType{
    doSound(): void {
        throw new Error("Method not implemented.");
    }
    breed: string;
    name: 21312;
    
}

//type cannot be extended by another type or interface
//Interface can be extended by another interface