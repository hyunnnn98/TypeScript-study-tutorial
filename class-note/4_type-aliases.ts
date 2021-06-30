// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

let koko: Person = {
    name: '승현',
    age: 24
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean; };
function getTodo(todo: Todo) {
    // todo.id
}

type test1 = { name: string; };

// 인터섹션(&) : 타입 별칭 test2는 test1과 { age: number} 를 모두 만족하는 또 하나의 타입으로 정의한다.
type test2 = test1 & { age: number; };
const test3: test2 = { name: 'koko', age: 24 };