/** 기본 타입간의 호환성
 * 특정 타입을 다른 타입으로 취급해도 괜찮은지?
*/
let num1: number = 10;
let num2: 10 = 10;
num1 = num2; //업캐스팅이라서 가능

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?!
 * -> 프로타입을 기준으로 관계 형성
 * -> 💡프로퍼티의 갯수가 더 작은 것(조건이 더 적은 것)이 슈퍼타입이다!
 */

type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; //animal(슈퍼타입). dog(서브타입) //업캐스팅
// dog = animal; //다운 캐스팅

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};
let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크키로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};
book = programmingBook;
// programmingBook = book

/**초과 프로퍼티 검사
 * -> 변수를 초기화할때 초기화하는 값으로 객체 리터럴을 사용하면 초과프로퍼티 검사 발생
 */

//초기화할때 skill 프로퍼티를 넣으려고하니 안된다?
// -> 초과 프로퍼티 검사 실행!!
let book2: Book = {
  name: "한 입 크키로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js", 
  // 실제타입에는 정의해놓지않은 프로퍼티를 작성하면 안되도록 막음,  초과 프로퍼티 검사
  // 딱 객체 타입에서만 정의된 타입만 정의하도록 하자!
};
// 서브타입 객체를 넣으려고하면 객체리터럴을 이용하는게 아니라 변수에 저장했다가 인수로 변수를 저장해야함 
let book3: Book = programmingBook // 가능