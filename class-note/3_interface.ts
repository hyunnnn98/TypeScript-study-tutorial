interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let hyun: User = {
    age: 24,
    name: '승현'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    age: 99,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

// 인터페이스를 활용할 경우,
// 실제 시버스 릴리즈 코드에는 반복적으로 타입을 정의할 필요는 없다🔥
let sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱 ( = Indexable types )
interface StringArray {
    // 객체에 어떤 index가 들어올지 모르는 경우, 아래 방법처럼 인덱싱을 정의할 수 있다.
    // EX) 들어올 index의 타입, 해당 인덱스 주소의 타입 을 정의함으로써 타입 오류를 방지🔥
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';  error 🤔 위에서 정의한 Interface에 어긋난 자료형이기 때문...

// 인터페이스로 선언했기 때문에, value의 타입을 확인할 수 있음.
Object.keys(obj).forEach(function (value) { });

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// 🔥상속을 받기위해 extends 키워드 사용.
// Person{age, name} 상속
interface Developer extends Person {
    language: string;
}

let koko: Developer = {
    language: 'JavaScript',
    name: 'hyun',
    age: 24
}

function interface_t(dev: Developer): void {
    console.log(`${dev.name} is is studying ${dev.language}`);
}

interface_t({ age: 20, name: 'SH', language: 'ts' });


