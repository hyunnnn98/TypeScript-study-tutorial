// function logMessage(value: any) : void {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// ๐ค์ ๋์จ ํ์ (Union Type)
// or ์ฐ์ฐ์๋ก ' \ ' ํ์ดํ๋ผ๋ ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํ๋ค !!
let seho: string | number | boolean;

function logMessage(value: string | number) {
    // ์๋์ if ๊ตฌ๋ฌธ์ฒ๋ผ ํน์  ํ์์ผ๋ก ํ์์ ๋ฒ์๋ฅผ ์ขํ๋๊ฐ๋ ๊ณผ์  ( ํํฐ๋ง ๊ณผ์  ) ์
    // ๐ฅ "ํ์ ๊ฐ๋" ๋ผ๊ณ  ๋ถ๋ฅธ๋ค.

    if (typeof value === 'number') {
        // type ์ด number ๋ผ๋ ๊ฒ์ ์ธ์งํ ์๊ฐ๋ถํฐ, number์ ๊ด๋ จ๋ API๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;

}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
    // someone.skill error 
    // skill or age ๋ณ์๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์ผ๋ฉด, ํ์ ๊ฐ๋๋ฅผ ์ด์ฉํด์ ์ ๊ทผํด์ผ ํจ.
}

askSomeone({ name: '๋๋ฒจ๋กํผ', skill: '์น ๊ฐ๋ฐ' });
askSomeone({ name: '์บกํด', age: 100 });

// var koko: string | number | boolean;
// var capt: string & number & boolean;

// ๐ค์ธํฐ์น์ ํ์ (Intersection Type)
// ์ธํฐ์น์์ผ๋ก ์ ์ํ someone์ Developer๊ณผ Person์ ์์ฑ๊ณผ ํ์์ ๊ฐ์ง ํ์์ด๋ค.
// ํ์ง๋ง, ์ค๋ฌด์์๋ ํ์ค์ ์ผ๋ก ์ ๋์จ ํ์์ ๋ง์ด ์ฌ์ฉํ๋ค!!! (์๋์ ์ผ๋ก)
function askCapt(someone: Developer & Person) {
    someone.name;
    someone.age;
}

// ์ธํฐ์น์์ผ๋ก ์ ์ํ๊ธฐ ๋๋ฌธ์, Developer ๊ณผ Person ์ ํ์๊น์ง ํฉํ ๊ฐ์ฒด๋ฅผ ๋๊ฒจ์ผ ํจ!!
askCapt({ name: '์ฝ์ฝ', skill: 'Vue.js', age: 24 });

