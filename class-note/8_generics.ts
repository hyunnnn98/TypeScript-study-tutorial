// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);        // 숫자 10
// logText('하이');    // 문자열 하이
// logText(true);      // 진위값 true

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// 타입을 명시하지 않으면, 추론되어서 프로그램이 돌아간다.
logText('하이');
// 명시적으로 string이라는 타입을 넘기겠다고 선언 !!!
logText<string>('하이');

/*********************************************************************/

function logString(argValue: string) {
    console.log(argValue);
    return argValue;
}
function logNumber(argValue: number) {
    console.log(argValue);
    return argValue;
}

const num = logNumber(10);

// 이런식으로 타입마다 함수를 재선언하는 행위는
// 비효율적이다!!!!!!!!!
// 따라서, Union Type을 이용해서 개선해보자.

/*********************************************************************/

function printText(argValue: string | number) {
    console.log(argValue);
    return argValue;
}

const a = printText('a');
// 이렇게 했을 때는 함수를 재선언하는 행위는 막았지만...
// a.split('') -> err => union type를 사용하여, string인지 number인지 구분을 못하고 있음.
// a  -> 자료형이 여전히 string 과 number 를 추적하고 있다. ( 반환값에 대한 문제를 해결하지 못함 )
printText(10);
printText(a);

function sayText<T>(argText: T): T {
    console.log(argText);
    return argText;
}

// 제네릭을 사용함으로써 부문별한 함수의 재선언 행위 + 반환값에 대한 문제 모두 해결하였다.
const str = sayText<string>('abc');
str.split('').reverse().join();

const login = sayText<boolean>(true);
login.valueOf();

const grade = sayText<number>(100);
grade.toFixed();

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const firstObj: Dropdown<string> = { value: 'abc', selected: false };
const secondObj: Dropdown<number> = { value: 123, selected: false };

// 🎃 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);

//     // 배열로 제한되어있기 때문에 forEach가 돌아간다.
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }

// logTextLength<string>(['hi', 'abc']);

// 🎃 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a');
logTextLength({ length: 10 });

// logTextLength(10);  err 'number' 형식의 인수는 'LengthType' 형식의 매개 변수에 할당될 수 없습니다.

// 🎃 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem 의 "key 중에 한가지"가 제네릭이 된다. ( "name" or "price" or "stock" )
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

// key의 이름만 들어갈 수 있다!!!!
getShoppingItemOption("name");