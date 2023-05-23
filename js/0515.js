var name = "홍길동";
var age = 12;

document.write("<h2>" + name + "</h2>");
document.write(`${name} ${age} 짤`);

let name1 = "Mike";
console.log(name1);
name1 = "Tomson";
console.log(name1);
let name2 = "마이클";
const 생일 = "1999-10-05";
console.log(생일);
생일 = "2020-10-10";
console.log(생일);
var let = "let me";
console.log(let);
// 렛은 중복에러
// 변수 첫글자는 숫자 불가능
// 변수이름은 예약어로 사용할슈옶더.
// 문자와 숫자, &와 _만 사용가능하다.
var BIRTHDAY = new Date();
console.log(BIRTHDAY.toLocaleDateString());
let $aaa_ = 300;
// let $aaa-1_=300; XXXX
let msg = "IM a boy"
console.log(msg);
let msg2 = "I\ 'm a boy";
console.log(msg2);
let msg3 = `MY name is ${name}`;
console.log(msg3)
let msg4 = `나는 ${30 + 1}살 입니다`;
console.log(msg4);

console.log(name / 2);
console.log(이름 * 2);
console.log(이름 + 10);
console.log(이름 - 10);
// Boolean 불리언-참, 거짓 true,false
// 불대수-논리학
let a = true;
let b = false;
console.log(a == b);
console.log(10 > 5);
console.log(name == "홍길동");

// 프로그래머 아내
// 남편 프로그래머
// 만약에 가게에 가서 이쁜여자가 있거나 이쁘면 가지마.
// if(여자 || 이쁘다){
// 실행
console.log(typeof 3)
// string, number, undefined, NaN, boolean,
// null 존재하지 않는 값
// undefined는 초기화(정의)하지 않는 자료형

var age = null;
// typeof null ->object 객체
function add() { }
console.log(typeof add);

var 고양이 = {}
console.log(typeof 고양이);
console.log(100 + 'hi');

var 별명 = prompt('별명을 입력하세요');
console.log("환영합니다" + 별명 + "님");
var 성인 = confirm("당신은 성인입니까?");
console.log(`${성인}`);
if (성인 == true) {
    console.log("당신은 성인이군요");
} else {
    console.log("당신은 아직 미성년자이군요");
}
var x, y;
var input;

input = prompt("정수를 입력하시오", "정수로")
x = parseInt(input);

input = prompt("정수를 입력하시오", "정수로")
y = parseInt(input);

document.write(x + y + "<br>")

function calc() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var sum;

    sum = parseInt(x) + parseInt(y);
    document.getElementById("sum").value = sum;
}