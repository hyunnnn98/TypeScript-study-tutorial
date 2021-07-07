# TS 타입 추론

## 기본적인 추론

- 값을 통해 추론 가능

```js
const a = 10;

function foo(b = 10) {
    return b + '10';
}
```

## 인터페이스 및 제네릭을 사용한 경우의 추론

```js
interface Item<T> {
    value: T,
    title: string
}

const v: Item <number> = {
    value: 100,
    title: 'score'
}
```

## Best Common Type 추론

union 등을 이용해 적절히 가장 잘 맞는 타입을 추론해 나감

```
const a1 = [1, 2, 3];
const a2 = [1, 2, true];
const a3 = [1, 2, true, 'hello'];
```

## TS Language Server

- VS Code 내부적으로 Language Server가 돌고 있음
- https://code.visualstudio.com/docs/languages/typescript
- https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
- https://langserver.org/
- https://docs.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019