interface PhoneNumberDictionary {
  [key: string]: {
    num: number;
  };
}

// 🎃상기의 인터페이스로 선언한 버전에 키 값을 enum으로 제한하기 위해 "타입 별칭"을 사용하였음!!
// type PhoneNumberDictionary = {
//   [P in PhoneType]: {
//     num: number;
//   };
// };

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { PhoneNumberDictionary, Contact, PhoneType };
