
/**
 * 함수 타입 표현식(function type Expression)
 */
// 화살표 함수를 만들듯이 타입별칭 이용가능!
// 비슷한 형식의 함수들을 여러개 만들어야 할 때 유용하다!
// 함수의 타입을 표현식으로 정의할때는 매개변수의 갯수와 타입을 다 맞춘다!

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mutiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처(콜 시그니처)
 * 함수 타입 표현식과 동일한 기능을 한다!
 * 객체 타입을 정의하듯 {}을 열고 ()안에 매개변수 타입 적고 : 뒤에 반환값 타입 적기!
 * 함수의 타입을 정의하는데 마치 객체타입을 정의하듯  {}을 사용하는 이유는 
 * 자바스크립트 함수도 객체이기때문이다!
 * 함수가 객체인 이유는 ? 자바스크립트의 문법과 관련된 내용이다!
 */
type Operation2 = {
    (a: number, b: number): number
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mutiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;