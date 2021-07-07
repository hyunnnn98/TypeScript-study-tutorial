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
    // value: 'koko',  error!! 제네릭에 의해 영향 받음.
    // tag: 'a',       error!! 제네릭에 의해 영향 받음.
}