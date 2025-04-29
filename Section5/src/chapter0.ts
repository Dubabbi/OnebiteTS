/** 함수 타입 정의*/
// 함수를 설명하기 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기한다.
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
    return a + b;
  }
  
  // 화살표 함수의 타입을 정의하는 방법
  const add = (a: number, b: number) => a + b;
  
  // 함수의 매개변수
  // 선택적 매개변수는 필수 매개변수 앞에 오면 안된다.
  function introduce(name = "김익명", age: number, tall?: number) {
    console.log(`name:${name}`);
    //+은 숫자와 숫자만 가능 tall은 undefined일 수 도있다.
    // console.log(`tall:${tall + 10}`); 오류
    if (typeof tall === "number") {
      console.log(`tall : ${tall + 10}`)
    }
  }
  // 자동 추론된 매개변수와 다른 타입을 인수로 전달하면 오류 발생
  introduce("김익명", 22);
  
  // rest파라미터
  // 매개변수로 몇개의 인수가 전달될지 모름
  // ...rest는 가변적인 길이를 전달하면 배열로 묶어서 저장
  // 매개변수의 갯수를 정하고 싶을때는 ...rest  : [number,number,number] 이렇게 정의해도된다!
  function getSum(...rest: number[]): number {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  getSum(1, 2, 3); //6
  getSum(1, 2, 3, 4, 5); //15