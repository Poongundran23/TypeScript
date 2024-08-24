// Eg.1:
function add(a: number, b: number){
    console.log(a + b);
}

add(5, 23);  // call by value -- arguments

// Eg.2
function sum(x: number, y: number, z: number): number{  // function with return (return type is not mandatory)
    return x+y+z;
}

console.log(sum(1, 5, 9));

// if a function is explicitly having void return type it can't return any

// Eg.3 - anonymous function - function without name and called by variable, can pass arguments as well

let me = function(name: string){
    console.log(`Me ${name}, I m anonymous!!`);
}

me('Poongundran');

let buy = function(a: number, b: number){
    return a + b;
}

let total: number = buy(10, 20);
console.log(total)


// Arrow Functions
// => fat arrow or lambda function
// called by variable only

// Eg.1
let stmt = () => {
    console.log('Printed');
}

// Eg.2
let printed = () => console.log('Printed as well');

stmt();  // variable to call the function
printed();  // variable to call the function

// Eg.3
let cost = (prod1: number, prod2: number) => prod1 + prod2
console.log(cost(1700000, 400000));

// Eg.4 - should use {} if return is used
let sumUp = (n1: number, n2: number) => {
    return n1 + n2;
}
console.log(sumUp(23, 32));


// Class:
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    display = () => console.log(`The person ${this.name} age is ${this.age}`); // don't use any variable name like var, let or const
}

let p = new Person('Sara', 32);
p.display();


// optional parameters

function perInfo(name: string, age?: number): string{  // age is an optional parameter and have ? symbol
    return `He is ${name} and age is ${age}`;
}

console.log(perInfo('Nane'));
console.log(perInfo('Muts', 25));

// default parameters

function welcomeHome(name1: string, wish: string = 'Welcome'){
    console.log('Hi ' + name1 + '! ' + wish + ' !!');
}

welcomeHome('Idiot');
welcomeHome('Stupid', 'hello');
welcomeHome('You', undefined);  // default value will be assigned

