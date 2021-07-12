# TypeScript Study
<img src="./TypeScript.png"  width="500" >


## 📚 목차
- [type-basic](./class-note/1_type-basic.ts)
- [function](./class-note/2_functions.ts)
- [interface](./class-note/3_interface.md)
- [type-aliases](./class-note/4_type-aliases.md)
- [enum](./class-note/6_enum.md)
- [class](./class-note/7_class.md)
- [generics](./class-note/8_generics.md)
- [type-inference](./class-note/9_type-inference.md)
- [type-assertion](./class-note/10_type-assertion.md)
- [type-compatiblity](./class-note/12_type-compatiblity.ts)
- [utility-type](./class-note/13_utility-type.ts)

## ✅ 실습
- [TodoList - 함수 구현, enum을 이용한 타입 정의](./quiz/1_todo/src/index.ts)
- [Promise를 이용한 API 함수 타입 정의](./quiz/2_address-book/src/index.ts)

## 🤔 interface와 type은 어떻게 정의해서 쓰나요?
- 인터페이스는 extends 키워드로 확장 가능. 타입 별칭은 유니온, 인터섹션과 같은 연산자로 확장 가능

- 인터페이스는 동일한 인터페이스 이름으로 타입 정의 확장 가능

- 타입 별칭은 VSCode의 인텔리센스로 내부 타입 미리 보기 가능