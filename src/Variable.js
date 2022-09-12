// var fruits=[];
// var animals=["사과","호랑이","곰"];
//
// fruits[0]="사과";
// fruits[1]="배";
// fruits[2]="바나나";
//
// var newArr3=[]
// var amount=fruits.length;
// var newstr=fruits.join("/");
//
//
// document.write(fruits+"<br/>");//자바 스크립트 사용하여 dom에 표시
// document.write(fruits[0]+"<br/>");
// document.write(newstr+"<br/>");
// var newArr=fruits.reverse();//리버스 쓰는 위치부터 다 바뀜!
// document.write(newArr);
//------------------------------------------------------------------
//Time
// function overLine(){
//     alert("준비 되었나요?")
// }
// var timer=setTimeout(overLine,3000);
// //측정할 시간 시간이 되면 할일,시간(시간은 1초당 1000으로 계산
// clearTimeout(timer);
// //클리어를 쓰면 아무것도 안됨
// var timer2=setInterval(overLine,3000);
////시간바다 반복할 동작!
// clearTimeout(timer2);
//------------------------------------------------------------------
//선택자 선정!
//ID타이틀 가져오기!
// var firstTitle=document.getElementById('title');
// console.log(firstTitle);
// //Class 가져오기
// var myList=document.getElementsByClassName("list");
// console.log(myList);
// //태그명으로 가져오기!
// var paragraphs=document.getElementsByTagName('p');
// console.log(paragraphs);
// //css 선택자로 가져오기
// var mylist2=document.querySelector(".List li")
//------------------------------------------------------------------
// firstTitle.style.color="red";
//
// //배열로 나와서 지정해 줘야됨
// myList[1].style.display="none";
// //배열로 나와서 지정해 줘야됨
// paragraphs[0].style.color="red";
// //그렇기 때문에 반복문을 사용함!
// for (var i=0; paragraphs.length; i++){
//     paragraphs[i].style.color="red";
// }
//------------------------------------------------------------------
//이벤트
var btn = document.getElementById("submit");
var con = document.querySelector(".container")
var log=function (){
    btn.style.color="red",
    alert("글씨 색깔이 바뀌었습니다");
}
var log1=function (){
    document.write("마우스가 올라왔습니다");
}
var log2=function (){
    document.write("마우스가 나갔습니다");
}
btn.addEventListener('click',log);
con.addEventListener('mouseover',log1);
con.addEventListener('mouseleave',log2);
