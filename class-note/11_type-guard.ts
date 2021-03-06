interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 24, skill: 'Iron Making' }
}

const tony = introduce();
// console.log(tony.skill); error!!

// 타입 단언을 이용한 체크.
// 반복되는 타입 단언으로 가독성이 떨어진다..
if ((tony as Developer).skill) {
    const skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    const age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
// 타입 가드를 선언할때 함수는 보통 is 로 시작함!
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}