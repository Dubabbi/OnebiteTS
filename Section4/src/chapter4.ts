/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean;
//합집합으로 정의했기때문에 string , number, boolean 값 넣을 수 있음.
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 교집합을 가지고 있는 type이다!
type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};
type Union1 = Dog | Person; // 타입별칭을 이용해서 Union타입 

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  language: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// 왜 안될까?? 
// let union4: Union1 = {
//     name: "",
//   };
// color가 없기때문에 Dog타입에도 포함될 수 없고
// language가 없기때문에 Person타입에도 포함 될 수 없다


/**2. 교집합 타입 - Intersection 타입
 * Intersection 타입은 객체 타입에서 많이 사용
 */
let variable: number & string; //공집합 never타입

// type Dog = {
//   name: string;
//   color: string;
// };
// type Person = {
//   name: string;
//   language: string;
// };


type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};