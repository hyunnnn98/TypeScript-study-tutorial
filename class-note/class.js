// ES5
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴', 100);

// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log(`생성 되었습니다.`);
        this.name = name;
        this.age = age;
    }
}

let hyun = new Person('승현', 24);   // 생성 되었습니다.
console.dir(hyun);