function Marin(level, name, 종족, life) {
    this.life = 10;
    this.name = name;
    this.level = level;
    this.fire = function () {
        this.level += 1;
        document.write(this.name + "이 공격합니다.<br>");
        if (this.level % 5 == 0) {
            document.write(this.name + "스팀백을 장착했습니다.<br>");
        }
    },
        this.defend = function () {
            this.life -= 5;
            if (this.life < 0) {
                document.write("마린이 전사했습니다<br>")
            }
        }
}

var 마린1 = new Marin(1, "마린", "테란", 10);
for (var i = 0; i < 20; i++) {
    마린1.fire();
    console.log(마린1.level)
    마린1.defend();
    console.log(마린1.life)

}

function Medic(level, name, 종족, life) {
    this.life = 10;
    this.name = name;
    this.level = level;
    this.heal = function () {

    }
}


