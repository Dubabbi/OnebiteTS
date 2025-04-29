/**
 * 타입좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 상황에 따라 타입을 좁히는 방법을 말함
 * */
type Person = {
    name: string;
    age: number;
  };
  // value => number : toFixed
  // value => string : toUpperCase
  // value => Date : getTime
  // value => Person : naem은 age살 입니다.
  function func(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
      // Date객체 : 날짜를 저장하는 객체 : nodejs에서 기본적으로 제공하는 내장객체 타입들이 기본적으로 제공
      // 왼쪽에 있는 값이 오른쪽의 인스턴스냐?
      // -> 인스턴스가 뭐냐!! value가 Date객체냐?!
      // instanceof 뒤에 type이 들어와서는 안됌
    } else if (value instanceof Date) {
      console.log(value.getTime());
      // age라는 프로퍼티가 value라는 값이 있니?
      // in 뒤에는 null이나 undefined가 들어오면 안됌
    } else if (value && "age" in value) {
      console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
  }