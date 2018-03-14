let square = (x) => {
    let result = x * x;
    return result;
};

let square2 = (x) => x * x;

let square3 = x => x * x;

let user = {
    name: 'Vicente',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1,2,3,4);
console.log(square(9));
console.log(square2(9));
console.log(square3(9));

