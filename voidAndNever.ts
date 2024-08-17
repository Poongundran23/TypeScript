// void - can't assign any value to void type except undefined

let nothing: void = undefined;

function printInfo(): void{  // void and return can't be used together
    console.log('PrintEd');
}


// never - can't assign any value for the never

let notPossible: never;

function err(msg: string): never{
    throw new Error(msg);
}

err('Error from never');
