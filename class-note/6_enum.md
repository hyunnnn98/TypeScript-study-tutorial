# TS enum

## enum
- 자바의 enum과 비슷하다.
- 간단하면서도 유용할 것 같다. ( 실무에서 드롭다운 등, 목록이 필요한 형태에서 좋음! )
> 예외처리 등, 케이스등에서 좋다!!

```ts
enum Menu {
    beefSoup,
    chikenSoup,
}

function eat(food: Menu): void {
    console.log(`${food} 를 먹습니다`); // 0 를 먹습니다.
}

eat(Menu.beefSoup);

enum KoreanMenu {
    beefSoup = '설렁탕',
    chikenSoup = '삼계탕',
}

function eatKoreanFood(food: KoreanMenu): void {
    console.log(`${food} 를 먹습니다`); // 설렁탕 를 먹습니다.
}

eatKoreanFood(KoreanMenu.beefSoup);
```

