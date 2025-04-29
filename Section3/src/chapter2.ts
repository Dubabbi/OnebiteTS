// 배열

// 배열에서의 타입 선언은 type[] or Array<type>(제네릭)으로 설정할 수 있다.
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "i'm", "winterwood"];

// let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니온 타입을 사용해서 타입을 결정한다.
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
// number[][] -> Array<number>[]도 가능
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

// 튜플 - 길이와 타입이 고정된 배열

// Javascript의 배열을 길이와 타입이 고정되어 있지 않다.
// Typescript의 배열은 타입을 고정시킬 수 있지만 배열의 길이를 고정시킬 수 없다.
let tup1: [number, number] = [1, 2];

// tup1 = [1, 2, 3] '[number, number, number]' 형식은 '[number, number]' 형식에 할당할 수 없습니다.
//   소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.
// tup1 = ["1", "@"] 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

let tup2: [number, string, boolean] = [1, "2", true];

// 당연히 튜플 내부에 값의 타입이 다르거나 길이가 다르면 error를 발생함.
// 튜플은 JS에서 배열이기때문에 배열 메서드를 사용할 수 있다. 그러면 값이 추가되고 삭제되는 push / pop을 사용할 수 있다는 건데
// 튜플의 의미가 없어지니 튜플을 사용할 때는 각별한 주의가 필요하다.

// 튜플을 사용하는 이유
const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "이건 안 됨"]
];
// users.push([1, "123"]);
// 예를 들어 2차원 배열을 생성했는데 push할 때 타입을 잘못 설정한 경우.
