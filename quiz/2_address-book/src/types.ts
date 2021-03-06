interface PhoneNumberDictionary {
  [key: string]: {
    num: number;
  };
}

// πμκΈ°μ μΈν°νμ΄μ€λ‘ μ μΈν λ²μ μ ν€ κ°μ enumμΌλ‘ μ ννκΈ° μν΄ "νμ λ³μΉ­"μ μ¬μ©νμμ!!
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
