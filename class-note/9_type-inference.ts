// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: '최상품',
//     title: '사과'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
    description: string;
    tag: T;
    // value;
    // title;
}

let detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 10,
    tag: 100
    // value: 'koko',  error!! 제네릭에 의해 영향 받음.
    // tag: 'a',       error!! 제네릭에 의해 영향 받음.
}

// Best Common Type ? 
// 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론한다.
// 그리고 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데, 이 가장 근접한 타입을 "Best Common Type"이라고 한다.

let arr = [1, 2, true, 'a'];// 타입 추론에 의한 값 : (string | number | boolean)[]