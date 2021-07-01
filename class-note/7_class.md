# TS class

## 클래스
- JS는 프로토타입 기반으로 상속을 한다.
- 최상위 객체는 Object이다.
- 생성자 함수에는 prototype 속성이 붙는다.
- 클래스 문법은 생성자 함수의 syntax sugar 이다.
```js
function Cat(name) {
    this.name = name;
}

class Cat {
    constructor(name, color) {
        this.name = name;
    }
}

let nabi = new Cat('Nabi', 3);
console.log(nabi);
console.log(Cat.prototype === nabi.__proto__); // true
```

## 프로토타입
```js
let user = { name: 'hyun', age: 24 };
let admin = { isAdmin : true };
admin.__proto__ = user;

console.log(admin.name, admin.age, admin.isAdmin);
console.log(user.__proto__);            // Object
console.log(user.__proto__.__proto__);  // null
console.log(admin.__proto__.__proto__); // Object
```