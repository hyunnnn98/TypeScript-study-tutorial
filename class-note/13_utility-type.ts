/**
 * Utility Types
 * 제네릭 타입 or 유틸리티 타입
 * 
 *  ✅ 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법.
 *  유틸리티 타입을 꼭쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로도 충분히 타입을 변환할 수 있지만
 *  유틸리티(제네릭)타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의할 수 있다.
 * 
 *  https://www.typescriptlang.org/docs/handbook/utility-types.html
 * 
 *  1. Pick<Type, Keys> => 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의할 수 있다.
 * 
 *  2. Omit<Type, Keys> => 특정 타입에서 지정된 속성만 제거한 타입을 정의할 수 있다.
 * 
 *  3. Readonly<Type>   => 읽기 전용
 *                         Constructs a type with all properties of Type set to readonly, 
 *                         meaning the properties of the constructed type cannot be reassigned.
 * 
 *  4. Partial<Type>    => 특정 타입의 부분집합을 만족하는 타입을 정의할 수 있다.
 *                         Make all properties in T optional.
 * 
 */

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
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

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// ✅ Pick<Type, Keys>
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {
    //..
}

// ❌ optional(?) 처리를 위해 불필요하게 코드가 중복 선언. ( interface Product )
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>

// 3.특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(produtItem: Partial<Product>) {
    //..
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1 original
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 custom ( Mapped type )
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// #3 custom 
// type UserProfileKeys = keyof UserProfile
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4 custom ( 제네릭까지 사용해서 모든 Type에 맞춰서 커스텀한 것 == Partial )
type Subset<T> = {
    [p in keyof T]?: T[p]
}

// ---------------------------------------------------------------------------------------
// ✅ Omit<Type, Keys>
interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 1231231234,
    company: '내 방'
}

const chingtao: Omit<AddressBook, 'address' | 'company'> = {
    name: '중국집',
    phone: 55555555555
}
// ---------------------------------------------------------------------------------------
// ✅ Readonly<Type>
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Delete inactive users",
};

// todo.title = "Hello"     error!! 읽기 전용 속성이므로 'title'에 할당할 수 없습니다.