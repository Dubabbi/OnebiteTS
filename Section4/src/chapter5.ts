/**
 * 타입 추론
 * (점진적인 타입시스템) ->
 * 변수를 선언할때 변수의 타입을 정의할수있는 문법을 제공해서
 * 프로그램이 실행되기전에 타입 검사를 수행하지만
 * 만약에 변수에 타입이 정의되지 않을때에도 변수에 선언하고 초기값을 넣어주기만하면
 * 알아서 초기값을 기준으로 타입을 추론한다
 * 주의 할점 : 모든 상황에 잘 추론해주지 않는다!!
 */

// 어떤 상황에 잘 추론할까? 어떤 원리로 추론할까?
// let은 타입 넓히기를 통해 조금 더 범용적인 타입으로 지정해줌 number,string 등
// const는 값이 바뀌지않기때문에 리터럴 타입으로 지정해줌

// 변수의 초기값에 따라 타입을 추론한다.
let a = 10; // number 타입으로 추론
let b = "hello"; // string 타입으로 추론
let c = {
  id: 1,
  name: "이정현",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// 구조 분해 할당 할 때에도 타입을 잘 추론한다
let { id, name, profile } = c;
let  [one, two, three] = [1,"hello",true];

// 함수의 반환값을 추론할때는 반환값을 기준으로 추론한다,
function fun() {
  return "hello";
}
function fun1(message = "hello") {
  return "hello";
}
// 초기값을 지정하지않으면 암묵적인 any타입으로 추론 : 암묵적인 any타입은 진화한다!
let d; // any로 추론
d = 10; 
d.toFixed();

d = "hello"; 
d.toUpperCase();

const num = 10; // 넘버리터럴타입 왜? const로 선언한 num은 어차피 상수이다
const str = "hello" // 문자리터럴타입

let arr = [1,"string"] // 타입 추론이 될때 최적의 공통타입으로 추론해줌