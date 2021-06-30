# TS 인터페이스

## Interface

- 인터페이스는 규약이다.
>인터페이스를 활용할 경우,   
>실제 시버스 릴리즈 코드에는 반복적으로 타입을 정의할 필요는 없다🔥
```ts
interface User {
    age: number,
    name: string,
}

let user1 : User = {
    age: 24,
    name: 'SeungHyun'
}
```

## 함수 매개변수 정의

```ts
function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}
```

## 함수 시그니쳐 정의

```ts
interface UpdateUser {
    (user: User, year: number): User;
}

const addYear: UpdateUser = function(user, yaer) {
    user.age += year;
    return user;
}
```

## 배열 인터페이스
- 인덱싱 ( = Indexable types )
```ts
interface StringArray {
    [index: number]: string;
}

const names: StringArray = ['apple', 'banana', 'carrot'];
// names[4] = 30; error
```

## 객체 키 정의하기 
>객체에 어떤 index가 들어올지 모르는 경우, 아래 방법처럼 인덱싱을 정의할 수 있다.   
>EX) 들어올 index의 타입, 해당 인덱스 주소의 타입 을 정의함으로써 타입 오류 방지🔥
```ts
interface Human {
    [child: string]: number | string;
    name: string;
    age: number;
}

const koko: Human = {
    name: 'SeungHyun',
    age: 24,
    sua: 'Developer',
    lala: 5
}
```
