var square=x=>x*x;

console.log(square(10));


var user={
    name:"Anand",
    sayHi:()=>{
        console.log(arguments);
        console.log(`Hi , This is ${this.name}`);
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi, This is ${this.name}`);
    }
}

//1. Using ES5 Arrow funtion can't get current object binding
user.sayHi(); //Hi , This is undefined
user.sayHiAlt();//Hi, This is Anand

//2. In arrow function won't get access to current method arguments;
user.sayHi(1,2,3,4); 
user.sayHiAlt(1,2,3,4);


