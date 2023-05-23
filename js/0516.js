var i = 0;
do {
    console.log("먼저실행 :" + i);
    i++;
} while (i < 10)
console.log(i);
// return 이후값 반환

while (true) {
    var answer = confirm("계속할까요?");
    if (!answer) {
        break;
    }
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i)

    }
}

for (var i = 0; i <= 100; i++) {
    var sum = 0;
    sum += i;

}
console.log(sum);

var 과일 = "사과";
var 과일 = ["사과", "바나나", "오렌지", "귤", "수박",];

console.log(과일.length);
for (var i of 과일) {
    document.write(i + " ");
}

document.write("구구단 2단")
document.write("<br>")

for (i = 0; i < 9; i++) {
    var sum = (i + 1) * 2;
    document.write(`2x${i + 1}=${sum}`)
    document.write("<br>")
}

var 강아지 = {
    종류: "시츄",
    이름: "멍멍이",
    먹다: function (음식) {
        return 음식 + "을 먹고 기뻐합니다";
    },
    놀다: function (장난감) {
        return this.이름 + "이/가" + 장난감 + "을/를 가지고 재밌게 놀고있습니다.";
    }
};
console.log(강아지.먹다("사료"))
console.log(강아지.놀다("공"))
for (var i in 강아지) {
    document.write(i + "  " + 강아지[i] + "<br>")
}

var 수강생 = {
    이름: "임민교",
    나이: 26,
    출근: function (교통수단) {
        return this.이름 + "님이/가 " + 교통수단 + "을/를   이용해서 출근 하셨습니다. <br>"
    },
    퇴근: function (시간) {
        return this.이름 + "님이/가" + 시간 + "퇴근 하셨습니다. <br>"
    }
};
document.write(수강생.출근("버스"));
document.write(수강생.퇴근("누구보다 빠르게 "));
for (var i in 수강생)
    document.write(i + ":" + 수강생[i] + "<br>");

for (i = 1; i <= 8; i++) {
    if (i % 3 == 0) console.log("<br>")
    for (j = 0; j <= 8; j++) {
        sum = (i + 1) * (j + 1)
        console.log((i + 1) + "x" + (j + 1) + "=" + sum)
    }
}
var square = "";
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 0) {
            square += "ㅁ ";
        } else if (i == 7) {
            square += "ㅁ ";
        } else {
            if (j == (0)) {
                square += "ㅁ";
            } else if (j == 9) {
                square += "ㅁ";
            }
            else {
                square += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
    }
    square += "<br>"
}
document.write(square)