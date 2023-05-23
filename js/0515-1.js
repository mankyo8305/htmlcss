// const 수학 = Number(prompt("수학몇점?"));
// const 영어 = Number(prompt("영어몇점?"));
// const 결과 = (수학 + 영어) / 2;
// console.log(결과);

// var 수학1 = 80;
// var 영어2 = 100;
// var 결과1 = (수학1 + 영어1) / 2;
// console.log(결과1);

// console.log(typeof 수학1);
// console.log(typeof 수학);

var num = '1000';
var num1 = 1000;
console.log(num / 2)
console.log(num1 / 2)

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("dh"));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(" "));

var num = 2 ** 3;
console.log(num);

var num1 = 10;
num1 = num1 + 5;
console.log(num1);

num1 + 10;
console.log(num1);
num1 -= 5;
num1 *= 2;
num1 /= 2;

console.time("시작");
num1 = num1 + 10
console.timeEnd("시작");

var a = 1;
var b = "1";
console.log(a == b);
console.log(a == b);
// if (age > 19) {
//     console.log("환영합니다");
// }
// if (age < 19) {
//     console.log("안녕하세요");
// }

age = 21;
if (age > 10) {
    console.log("환영합니다");
} else if (age == 19) {
    console.log("19살 입니다.");
} else {
    console.log("미성년입니다.");
}

var a = 100;
var b = 200;
var c = true;
var d = false;

console.log(c && d);
console.log(c || d);

console.log(a > b);
console.log(!(a > b));

var 성별 = "여성";
var 이름 = "제인";
var 성인 = true;

if (성별 = "남성" && 이름 == "마이크" || 성인 == true) {
    console.log("통과")
} else {
    console.log("입장불가")
}

var html = "html5"
if (html == "html5") {
    console.log("javascript");
} else {
    console.log("css");
}
var result = html == "html5" ? "javascript" : "css";
console.log(result);

var str1 = "welcome";
console.log(true || str1);
console.log(false || str1);
console.log(true && str1);
console.log(false && str1);

function 과일(name, count) {
    var count = count || 1;
    console.log(name + "이" + count + "개입니다");
}

과일("수박", 5)

debugger;

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i)

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var input = 10;
switch (input % 2) {
    case 0:
        console.log("짝수입니다");
        break;
    case 1:
        console.log("홀수입니다.");
        break;
    default:
        console.log("숫자가 아닙니다.");
        break;
}

var site = prompt("가고싶은 포탈사이트?");
var url;

switch (site) {
    case "네이버":
        url = "http://www.naver.com";
        break;
    case "다음":
        url = "http://www.daum.net";
        break;
    case "구글":
        url = "http://www.google.com";
        break;
    default:
        console.log("없는 사이트 입니다.");
}
if (url) location.href = URL;

var computerNumber = 53;	// 정답
var nGuesses = 0;		// 추측 횟수


function guess() {
    var result = "";		// 결과 메시지

    // 사용자가 입력한 값을 받아서 변수 number에 대입한다. 
    var number = parseInt(document.getElementById("user").value);
    nGuesses++;		// 추측 횟수를 증가시킨다. 

    if (number == computerNumber) result = "성공입니다.";
    else if (number < computerNumber) result = "업.";
    else result = "다운.";

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;
    return true;
}
var num1 = 10;
var num2 = 20;

console.log(num1++);
console.log(++num1);


