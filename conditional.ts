// Eg.1

let flag1: boolean = true;
if (flag1){
    console.log('Its true');
} else {
    console.log('false');
}

// Eg.2
let a: number = 1;
let b: number = 2;
let c: number = 3;
let myNum: number = 5;
if(myNum > a && myNum > b){
    console.log('something');
} else if(myNum > b){
    console.log('somthing1');
} else {
    console.log('something2');
}

// Ternary Operator

// Eg.1
let i: number = 100;
let j: number = 200;
i > j ? console.log('i is greater') : console.log('j is greater');

// Eg.2
let browser: string = 'chrome';

(browser === 'chrome') ? console.log('chrome browser') : (browser === 'firefox') ? console.log('firefox browser') : console.log('no browser');