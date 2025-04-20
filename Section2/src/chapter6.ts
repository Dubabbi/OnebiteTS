// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용(모든 / 누구나)

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;
// any 타입을 사용하면 타입 검사를 하지 않기 때문에
// 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입
// any 타입을 사용하면 타입스크립트를 사용하는 이유가 사라짐
// 따라서 any는 불가피하지 않은 이상 사용하지 않는게 좋음

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입으로 선언된 값은 어떤 타입의 변수에 할당할 수 없음.
// num = unknownVar;
// 또한 어떠한 메서드도 사용할 수 없음.
// unknownVar.toUpperCase()

// 따라서 변수에 타입이 정해지지 않았으면 any를 사용하는 것보단 unknown을 사용 권장
// 타입 정제를 활용하여 unknown을 변수에 할당시킬 수 있음
if (typeof unknownVar === "number") {
    num = unknownVar;
}