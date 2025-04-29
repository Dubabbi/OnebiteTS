/**
 * 함수오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * 실제로 타입스크립트를 지원하는 라이브러리는 함수오버로딩 문법 사용 
 * -> 라이브러리 코드 분석할 때 좋다!
 
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 => 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 => 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처
// 함수를 오버로딩하기위해서 각각 매개변수별로 다른 버전을 명시해주기위해 사용
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현시그니처
// 매개변수를 정의해줘야함 왜? 써야하니까!!
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(20 * a);
  }
}
// 오버로드 시그니처의 하나의 버전을 따라감
// func(); //없는거 없다 => 오류
func(1);
// func(1,2); //2개인거 없다. => 오류
func(1, 2, 3);