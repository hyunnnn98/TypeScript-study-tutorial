// π₯ νμ λ¨μΈ(type assertion)
// νμμ€ν¬λ¦½νΈμμ μ μΈν΄μ£Όλ μλ£νμ λ¬΄μνκ³ 
// κ°λ°μκ° μ μΈνλ μλ£νμ ν΄λΉ μλ£μ μλ£νμΌλ‘ μ μΈνλ κ²μ΄
// νμ λ¨μΈ == "as" μ΄λ€.
let a;
a = 20
a = 'a'
let b = a as string;

// DOM API μ‘°μ
// <div id="app">hi</div>

let div = document.querySelector('div');    // div: HTMLDivElement

if (div) {
    div.innerHTML
    div.innerText
}
