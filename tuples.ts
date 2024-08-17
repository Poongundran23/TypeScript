// tuple is a fixed size in JS
// tuple follows the order

//Eg.1
let personId: [String, number] = ['Rock', 1];  // tuple follows order
let Raja: [String, number, boolean] = ['Raja', 19, true];

console.log(Raja[0]);
console.log(Raja[1]);
console.log(Raja[2]);

// Eg.2
let boys: [String, number][] = [['Tom', 1], ['Jerry', 2], ['Jim', 3]];
console.log(boys[2]);
console.log(boys[0][0]);

// Eg.3
let marvelBoys: [String, String] = ['', ''];  // tuple must be initialised and assigned initial values
marvelBoys.push('Captain', 'America');
marvelBoys.push('Hulk', 'Green');
console.log(marvelBoys);
