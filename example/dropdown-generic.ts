// 🔥 하나의 인터페이스로 제네릭을 이용해서 여러가지 타입을 커버하는 방법.
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
// 매번 타입에 대한 정의를 interface로 선언하다보면 무수한 interface를 볼 수 있게 된다....
// 한마디로 비효울적이라는 것!!!!!!

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

// createDropdownItem 함수에 제네릭을 선언하여 유니온 타입을 생략하여
// 보다 깔끔한 코드를 작성할 수 있다.
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
})