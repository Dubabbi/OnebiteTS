/**map메서드 : 새로운 배열 반환*/
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6]

function map<T, U>(arr: T[], callback: (itme: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
map(arr, (it) => it * 2);
// 스트링 타입을 인수로 전달한다고 해서 결과값이 string일 이유는 없다!
map(["hi", "hello"], (it) => parseInt(it));


// forEach : 원본 변경
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr2, (it) => {
  console.log(it.toFixed());
});
forEach(['123', '456'], (it) => {
  console.log(it);
});