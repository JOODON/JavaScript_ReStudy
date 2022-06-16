'use strict';

//1.String concatenation

console.log("my"+`cat`);
console.log("1"+2);
console.log(`String literrals:1+2=${1+2}`);

//Increment and decrement operators
let counter=1;
const preIncremt=++counter;
console.log(`preIncremt:${preIncremt}counter:${counter}`);

//Logical operators: || (or) &&(and) !(not)

const Stringnumber=`5`
const Integernumber=5
//Equality
console.log(Stringnumber==Integernumber);//true 콘솔값만 보고 출력

console.log(Stringnumber===Integernumber);//문자의 형까지 보고 출력

const Human1={
    name:`player`
}
const Human2={
    name:`player`
}
const Human3=Human1;

console.log(Human1==Human2);//false
console.log(Human2===Human3);//false
console.log(Human1===Human3);//true

//Ternary operator:?
const name="Hello"
console.log(name ==="Hello" ? "yes":"no");