enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes);   // '나이키'

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

// answer의 자료형을 Answer라는 enum을 사용했기 때문에, 함수에 파라매터에도 enum을 사용한 값을 넣어야 함.
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }

    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Yes')  // err
// askQuestion('예스') // err