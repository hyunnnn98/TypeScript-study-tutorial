# TS Generic

## Generic 기본 사용법
```ts
function log<T>(argValue: T): T {
    console.log(argValue);
    return argValue;
}

const a = log<string>("hello");
console.log(a);
```

## 인터페이스에 제네릭 사용하기
```ts
interface Item<T> {
    value: T;
    selected: boolean;
}

const emails: Item<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.com', selected: true },
]
```

## 제네릭 타입 제한
```ts
interface LengthType {
    length: number;
}

function printSize<T extends LengthType> (items: T): number {
    console.log(items.length);
    return items.length;
}

printSize<number[]>([1, 2, 3, 4, 5]);
```

## extends keyof
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; // Inferred type is T[K]
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
}

let x = { foo: 10, bar: "hello!" };

let foo = getProperty(x, "foo");    // number
let bar = getProperty(x, "bar");    // string

let oops = getProperty(x, "koko");  // Error! "koko" is not "foo" | "bar"

setProperty(x, "foo", "string");    // Error!, string expected number
setProperty(x, "foo", 99);          // { foo: 99, bar: "hello" }
```
