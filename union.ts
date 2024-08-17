// union is union of different data types

// Eg.1
let userId: (string | number);
userId = 9001;
userId = 'Poo';

function getuser(cusId: (string|number)) {
    if (typeof(cusId) === 'number'){
        return 'Id of customer is ' + cusId;
    } else if (typeof(cusId) === 'string') {
        return 'Name of the customer is ' + cusId;
    }
}

console.log(getuser(23));
