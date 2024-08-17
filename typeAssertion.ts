// to define the type

// used in two ways - using <>, using as keyword

// Eg.1

let price: any = 50;
let finalPrice = <number>price + 20;  // here as price is defined as any so explicitly mention the type as number
console.log(finalPrice);

let someThing: any = 'hi!';
let len = (someThing as string).length;
console.log(len);

let flag2: any = true;
if(flag2 as boolean){
    console.log('hello mr!');
}
                                    