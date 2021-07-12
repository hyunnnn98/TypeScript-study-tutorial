/**
 * 제네릭 타입 or 유틸리티 타입
 * 
 *  ✅ 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법.
 *  유틸리티 타입을 꼭쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로도 충분히 타입을 변환할 수 있지만
 *  유틸리티(제네릭)타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의할 수 있다.
 * 
 *  1. Pick => 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의할 수 있다.
 */

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    //..
    let item1 = { id: 1, name: 'mask', price: 2000, brand: 'koko', stock: 3 }
    let item2 = { id: 2, name: 'mask', price: 1500, brand: 'lala', stock: 5 }

    return new Promise(resolve => {
        setTimeout(() => resolve([item1, item2]), 2000);
    });
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// ✅ Pick type
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {
    //..
}