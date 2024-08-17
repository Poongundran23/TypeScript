// array is dynamic - can add more values through say push() method
// defining array by defining the array type
// Eg.1
let names: String[] = ['MyName', 'YourName', 'HisName', 'HerName'];
console.log(names[0]);

// using generics
let empIds: Array<number> = [1,2,3];
let empnames: Array<String> = ['Ram', 'Rahim', 'Robert'];
let empInfo: Array<any> = [1, 'Ram', true, null];

// multi type array
let perInfo: (String | number)[] = ['Tom', 7, 'Jerry', 6];
let isAdult: Array<String | boolean> = ['Tom', false, 'Jerry', true];

// iterate an array - loops
let emps: Array<String> = ['IronMan', 'Captain', 'Hulk', 'Thor'];
// index based looping
for(let i = 0; i < emps.length; i++){
    console.log(emps[i]);
}
// for in loop
for(let e in emps){
    console.log(e + ' : ' + emps[e]);  // e represents indexation
}


