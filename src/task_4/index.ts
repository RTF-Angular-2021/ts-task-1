/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
*/

/**
 * и interface, и type  могут использоваться для описания структур данных
 */

interface IFoo {
    a: number
    b: string
}
 
type FooType = {
    a: number
    b: string
};

/**
 * отличие type и interface заключаетяс в:
 * 1 если два interface имеют одно имя, то они сливаются 
 * 
 * interface IFoo 
 * {
 *     a: string
 * }
 * 
 * interface IFoo 
 * {
 *     b: string
 * }
 * 
 * let foo: Foo;
 * 
 * foo.a
 * foo.b
 * 
 * type это не поддерживает
 * 
 *  2 interface представляет именнованный тип объекта, а type позволяет задать псевдоним для любой разновидности типа
 * 
 *  3 interface может быть использован в выражении extends или implements
 * 
 *  4 type нельзя расширять, в нем нельзя наследоваться
 * 
 *  5 type не может быть изменен после того, как его уже создали, в отличии от interface
 * 
 *  6 type может объединять в себе другие типы
 * 
 * type FooType = string | number
 * 
 *  
*/
