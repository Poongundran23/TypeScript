// enum : Enumerator : data types that holds constants - String, number, heterogenous

// Eg.1 - numeric type - default value is 0, but picks up whatever previous value defined
enum Browser{
    Chrome,
    Firefox,
    Edge,
    Safari
}

console.log(Browser.Chrome);
console.log(Browser);

// Eg.2 - String type
enum Environment{
    PREDEV = 'Predev',
    DEV = 'Dev',
    STAGE = 'Stage',
    PROD = 'Prod'
}

console.log(Environment);
console.log(Environment.DEV);

// Eg.3 - Heterogenous type
enum Status{
    ACTIVE = 'Active',
    DEACTIVE = 0,
    PENDING = 'Hold'
}

console.log(Status.ACTIVE);
console.log(Status);
