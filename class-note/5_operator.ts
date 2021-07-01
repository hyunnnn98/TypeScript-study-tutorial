// function logMessage(value: any) : void {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 유니온 타입 (Union Type)
// or 연산자로 ' \ ' 파이프라는 연산자를 사용한다 !!
let seho: string | number | boolean;

function logMessage(value: string | number) {
    // 아래의 if 구문처럼 특정 타입으로 타입의 범위를 좁혀나가는 과정 ( 필터링 과정 ) 을
    // 🔥 "타입 가드" 라고 부른다.

    if (typeof value === 'number') {
        // type 이 number 라는 것을 인지한 순간부터, number에 관련된 API를 사용할 수 있다.
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;

}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
    // someone.skill error 
    // skill or age 변수를 사용하고 싶으면, 타입 가드를 이용해서 접근해야 함.
}