/** Задача 4
 * Измените объявление функции filterUsers так, чтобы
 * в аргумент criteria можно было передавать объект,
 * содержащий любое поле или поля объекта User
*/

interface User {
    type: string;
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: string;
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
		type: 'user',
		name: 'Max Mustermann',
		age: 25,
		occupation: 'Chimney sweep'
	},
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';
const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}



export function filterUsers<T extends Object>(persons1: Person[], criteria: T): User[] {
    return persons1.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return getKeyValue<User, any>(fieldName)(user) === getKeyValue<Object, any>(fieldName)(criteria);
        });
    });
}

console.log('Users of age 23:');

filterUsers<{}>(
    persons,
    {
        age: 23
    }
).forEach(logPerson);