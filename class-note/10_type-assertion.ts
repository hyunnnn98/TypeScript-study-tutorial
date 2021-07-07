// 🔥 타입 단언(type assertion)
// 타입스크립트에서 선언해주는 자료형을 무시하고
// 개발자가 선언하는 자료형을 해당 자료의 자료형으로 선언하는 것이
// 타입 단언 == "as" 이다.
let a;
a = 20
a = 'a'
let b = a as string;

// DOM API 조작
// <div id="app">hi</div>

let div = document.querySelector('div');    // div: HTMLDivElement

if (div) {
    div.innerHTML
    div.innerText
}
