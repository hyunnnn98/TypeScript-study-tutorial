// 변수에 인터페이스 활용
var hyun = {
    age: 24,
    name: '승현'
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
var capt = {
    age: 99,
    name: '캡틴'
};
getUser(capt);
// 인터페이스를 활용할 경우,
// 실제 시버스 릴리즈 코드에는 반복적으로 타입을 정의할 필요는 없다🔥
var sum;
sum = function (a, b) {
    return a + b;
};
var arr = ['a', 'b', 'c'];
var obj = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
};
// obj['cssFile'] = 'a';  error 🤔 위에서 정의한 Interface에 어긋난 자료형이기 때문...
// 인터페이스로 선언했기 때문에, value의 타입을 확인할 수 있음.
Object.keys(obj).forEach(function (value) { });
var koko = {
    language: 'JavaScript',
    name: 'hyun',
    age: 24
};
function interface_t(dev) {
    console.log(dev.name + " is is studying " + dev.language);
}
interface_t({ age: 20, name: 'SH', language: 'ts' });
