// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
//     // skill: string;
// }

// 클레스
class Person {
    name: string;
    // skill: string;
}

var developer: Developer;
var person: Person;

person = developer; // OK!!
// developer = person;          error!!
// developer = new Person();    error!!

// 함수
var add = function (a: number) {
    // ...
}

var sum = function (a: number, b: number) {
    // ...
}

// add = sum;  error!! 
// '(a: number, b: number) => void' 형식은 '(a: number) => void' 형식에 할당할 수 없습니다.

sum = add;  // OK!!

// 제네릭
interface Empty<T> {
    // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;    // OK!!
empty2 = empty1;    // OK!!

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;   error!!
// notempty2 = notempty1;   error!!
// 'number' 형식은 'string' 형식에 할당할 수 없습니다.