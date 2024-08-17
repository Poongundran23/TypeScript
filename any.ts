// to define any data type

//Eg.1

let something: any;
something = 'name';
something = 23;
something = true;

let arr: any[] = ['name', 23, true];

function add(a: number, b: number): any {
    return a + b;
}

console.log(add(5,9));

