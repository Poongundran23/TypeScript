// Function overloading is possible in type script
// can have same function name but different parameter type and return type
// but number of parameters should be same

// provide the prototye
function display(name: string): string;
function display(name: number): number;

// then implement the function only once
function display(name: any): any{
    return name;
}

console.log(display('hi'));
console.log(display(23));
