function add(x: string | number, y: string | number): string | number {
    return typeof x === "string" ? <string>x + <string>y : <number>x + <number>y;
}

add('20', '21'); //2021
add(20, 21); //41