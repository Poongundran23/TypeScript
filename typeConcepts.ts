console.log('Hello! typescript!!');

let age:number = 30;
let myName:String = 'Poongundran';
let flag:Boolean = true;

console.log(age);
console.log(myName);
console.log(flag);

// type script is a statically typed language - once the data type is declared it can't be overrided

let fname: String;
fname = 'Poongundran';
// fname = 40;  - not allowed

// type inference -  assigning the data type for a variable at the compile time is called type inference

let n = 40; // number data type is assigned for the n at the compile time

// type annotations - explicitly defining the type is called type annotations

let lName: String  // type annotation

// null and undefined

let empty: null = null;
let mad: undefined = undefined;

// any - generally used for dynamic data

let value: any = 90;
value = 'name';
value = true;  // accepts all type

// void function does not return anything and defining data type returns particular type

function printInfo(): void{
    console.log('print');
}

function getAdd(a: number, b: number): number{  // return type will be decided at the compile time
    return a + b;
}
