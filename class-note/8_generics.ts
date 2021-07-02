// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);        // 숫자 10
// logText('하이');    // 문자열 하이
// logText(true);      // 진위값 true

function logText<T>(text: T):T {
    console.log(text);
    return text;
}

// 타입을 명시하지 않으면, 추론되어서 프로그램이 돌아간다.
logText('하이');
// 명시적으로 string이라는 타입을 넘기겠다고 선언 !!!
logText<string>('하이');

/*********************************************************************/

function logString(argValue: string) {
    console.log(argValue);
    return argValue;
}
function logNumber(argValue: number) {
    console.log(argValue);
    return argValue;
}

const num = logNumber(10);

// 이런식으로 타입마다 함수를 재선언하는 행위는
// 비효율적이다!!!!!!!!!
// 따라서, Union Type을 이용해서 개선해보자.

/*********************************************************************/

function printText(argValue: string | number) {
    console.log(argValue);
    return argValue;
}

const a = printText('a');
// 이렇게 했을 때는 함수를 재선언하는 행위는 막았지만...
// a.split('') -> err => union type를 사용하여, string인지 number인지 구분을 못하고 있음.
// a  -> 자료형이 여전히 string 과 number 를 추적하고 있다. ( 반환값에 대한 문제를 해결하지 못함 )
printText(10);