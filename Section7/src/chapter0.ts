/**
 * 제네릭 : 일반적인, 포괄적인 함수
 * 모든타입에 두루두루 범용적으로 사용할 수 있음.
 */

// 제네릭 함수
// 함수의 인수에 따라서 반환값 타입을 가변적으로 정해줄수있음
// <T> : 타입변수 - 타입을 저장하는 변수
// 함수를 호출할때 인수에 따라서 타입이 정해짐!
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
// 타입을 명시적으로 작성할수도 있음
let arr = func<[number, number, number]>([1, 2, 3]);