/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
 */
interface IFoo {
  a: number;
  b: string;
}

type FooType = {
  a: number;
  b: string;
};

//В отличие от объявления интерфейса, которое всегда представляет именованный тип объекта, применение ключевого слова type позволяет задать псевдоним для любой разновидности типа, включая примитивные типы, типы-объединения и типы-пересечения.

// При использовании ключевого слова type вместо ключевого слова interface теряются следующие возможности:

// Интерфейс может быть использован в выражении extends или implements, а псевдоним для литерала объектного типа — нет.
// Интерфейс может иметь несколько объединённых объявлений, а при использовании ключевого слова type эта возможность не доступна.

// 1
//Оба могут использоваться для описания формы объекта или сигнатуры функции. Но синтаксис отличается.

interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

// type Point = {
//   x: number;
//   y: number;
// };

// type SetPoint = (x: number, y: number) => void;

// 2
// В отличие от интерфейса, псевдоним типа также может использоваться для других типов, таких как примитивы, объединения и кортежи.
// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// 3 Extend - расширение
// Оба могут быть расширены, но опять же, синтаксис отличается. Кроме того, обратите внимание, что интерфейс и псевдоним типа не исключают друг друга. Интерфейс может расширять псевдоним типа и наоборот.

// Interface extends interface
interface PartialPointX2 {
  x: number;
}
interface Point extends PartialPointX2 {
  y: number;
}

// Type alias extends type alias
type PartialPointX3 = { x: number };
type Point3 = PartialPointX3 & { y: number };

// Interface extends type alias
type PartialPointX4 = { x: number };
interface Point extends PartialPointX {
  y: number;
}

// Type alias extends interface
interface PartialPointX5 {
  x: number;
}
type Point11 = PartialPointX5 & { y: number };

// 4 Implements
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
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

type PartialPoint2 = { x: number } | { y: number };

// FIXME: can not implement a union type
// class SomePartialPoint implements PartialPoint2 {
//   x = 1;
//   y = 2;
// }

// 5 Объединение деклараций
// В отличие от псевдонима типа, интерфейс может быть определен несколько раз и будет рассматриваться как единый интерфейс (с объединенными членами всех объявлений).

interface Point {
  x: number;
}
interface Point {
  y: number;
}

const point: Point = { x: 1, y: 2 };
