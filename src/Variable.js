'use strict';//에러를 잡아주는 코드? 그냥 선언해 주고 시작하자
//1.Variable `변수
{
    let name=`주동호`;
    console.log(name);
}
name="이선영";//글로벌 변수 어디에서나 사용가능
console.log(name);

{
    let age=22;//블록 변수 블록 안에서만 사용이 가능하다
    console.log(age);
}

const daysInWeek=7; //변수 인데 절대 변하지 않음

const count=17;//Integer//정수
const size=17.1;//decimal number//실수
console.log(`value:${count},type:${typeof count}`);
console.log(`value:${size},type:${typeof size}`);

const infinity=1/0;
const negativeInfinity=-1/0;
const nAn ="not"/2;

console.log(infinity);//무한정이라 계산 x일때
console.log(negativeInfinity);//계산 x인데 실수
console.log(nAn);//숫자가 아니다

let not=null;//아에 빈 녀석이라고 선언
console.log(`value:${not},type:${typeof not}`);

let x;//얘는 선언 되어 있지 않음 변수는 있는데 선언은 x
console.log(`value:${x},type:${typeof x}`);

//심볼은 중복 x
const symbol1=Symbol("id");//이 둘은 같은 x
const symbol2=Symbol("id");//이 둘은 같은 x

const symbol3=Symbol.for("id");//이 둘은 같은 o
const symbol4=Symbol.for("id");//이 둘은 같은 o

console.log(symbol1.description)//출력을 할 경우에는 붙혀줘야됨

//오브젝트
const Human={
    name:`Dong`,
    age:10
};
x=0
console.log(x += 1)
console.log(x++)
