// π₯ νλμ μΈν°νμ΄μ€λ‘ μ λ€λ¦­μ μ΄μ©ν΄μ μ¬λ¬κ°μ§ νμμ μ»€λ²νλ λ°©λ².
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
// λ§€λ² νμμ λν μ μλ₯Ό interfaceλ‘ μ μΈνλ€λ³΄λ©΄ λ¬΄μν interfaceλ₯Ό λ³Ό μ μκ² λλ€....
// νλ§λλ‘ λΉν¨μΈμ μ΄λΌλ κ²!!!!!!

// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// createDropdownItem ν¨μμ μ λ€λ¦­μ μ μΈνμ¬ μ λμ¨ νμμ μλ΅νμ¬
// λ³΄λ€ κΉλν μ½λλ₯Ό μμ±ν  μ μλ€.
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: μ΄λ©μΌ λλ‘­ λ€μ΄ μμ΄ν μΆκ°
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
})