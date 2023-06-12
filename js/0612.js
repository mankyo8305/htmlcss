function minus(a, b, callback) {
    var result = a - b
    callback(result)
    var count = 0
    var history = function () {
        count++
        return count + " : " + a + "-" + b + "=" + result
    }
    return history
}
var minus_history = minus(100, 5, function (result) {
    console.log('호출됨')
    console.log(result)
})
console.log(minus_history());
console.log(minus_history());
console.log(minus_history());
console.log(minus_history());
// ////////////////////////////////////////

function Person(nm, ag) {
    this.name = nm
    this.age = ag
}
Person.prototype.walk = function (speed) {
    console.log(speed + ' km 속도로 걸어간다');
    return speed + 'km 속도로 걸어간다'
}
var person1 = new Person('이순신', 40)
person1.walk(20)
console.log(`${person1.name}이 ${person1.walk(30)}`);
///////////////
