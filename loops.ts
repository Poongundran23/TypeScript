// simple for loop

for(let i = 0; i<7; i++){
    console.log(i);
    if(i == 5){
        break;
    }
}

// for .. of loop  - it will print the values
let fruits = ['apple', 'orange', 'guava'];

for(let f of fruits){
    console.log(f);
}

// for .. in loop - it will not print the values it will print only index
for(let ind in fruits){
    console.log(ind + fruits[ind]);
}


// while loop
let w = 1;
while(w < 6){
    console.log(w);
    w++;
}

// do - while loop
let d = 1;
do{
    console.log(d);
    d++;
} while (d < 10);
