// Mapped type ( for in 반복문 코드를 사용하는 느낌으로! )
// 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법

type Heroes = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = { [K in Heroes]: number }

const ages: HeroAges = {
    Hulk: 24,
    Capt: 1000,
    Thor: 1000000
}

type Subset<T> = {
    [K in keyof T]?: T[K];
}

interface Person {
    age: number;
    name: string;
}

const ageOnly: Subset<Person> = { age: 23 };
const nameOnly: Subset<Person> = { name: 'Tony' };
const empty: Subset<Person> = {};