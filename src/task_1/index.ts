  /** Задача 1
 * Требуется описать типы FooType и BarType так, чтобы код,
 * который написан в функции logObj компилировался и исполнялся корректно
*/

type FooType = {
    stringProp: string;
    numberProp: number;
    barObject: BarType;
};
type BarType = {
    stringsArrayProp: string[];
    numbersOrDatesArrayProp: Array<number | Date>;
    functionProp: (flag: boolean) => void;
};

export const fooObjects: FooType[] = [
    {
        stringProp: 'firstFoo',
        numberProp: 2077,
        barObject: {
			stringsArrayProp: ['barString1', 'barString2', 'barString3'],
			numbersOrDatesArrayProp: [new Date(), 100500, new Date(2077), 2020],
			functionProp: (flag: boolean) => console.log(!flag),
		}
    },
    {
        stringProp: 'secondFoo',
        numberProp: 2020,
        barObject: {
			stringsArrayProp: ['barString1', 'barString2', 'barString3'],
			numbersOrDatesArrayProp: [new Date(2077), 2020, new Date(), 100500],
			functionProp: (flag: boolean) => console.log(flag),
		}
    },
];

function logObj(fooObject: FooType) {
    console.log(`stringProp -- ${fooObject.stringProp}`);
	console.log(`numberProp -- ${fooObject.numberProp}`)
    console.log(`barObject.stringsArrayProp -- ${fooObject.barObject.stringsArrayProp}`)
    console.log(`barObject.numbersOrDatesArrayProp -- ${fooObject.barObject.numbersOrDatesArrayProp}`)
    console.log(`barObject.functionProp -- ${fooObject.barObject.functionProp(true)}`)
}
 
fooObjects.forEach(logObj);