# TS 타입별칭

## 타입별칭
- `type` 키워드를 이용해서 사용자 정의 타입을 만드는 것을 말한다.
- 새로운 타입을 생성하지 않고 기존에 있는 타입에 별칭을 부여하는 것이다.
```ts
type Name = string;

interface User {
    age: number;
    name: Name;
}

type Man = User;

const hyun: Man = {
    age: 24,
    name: 'koko haha',
}
```

## type vs interface
> 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부 이다.   
> 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하다.   
> 따라서, 가능한한 `type` 보다는 `interface`로 선언해서 사용하는 것을 추천.