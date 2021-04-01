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

// Интерфейс, в отличии от типа, может наследоваться. В интерфейсах нельзя использовать union( | )
// Интерфейс может расширяться, если объявить два интерфейс с одинаковым именем. У каждого же типа должно быть уникальное имя.
// Тип подходит для создания како-либо нестандартной переменной. Интерфейс для опсания логика объекта.
