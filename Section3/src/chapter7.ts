// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없을을 의미하는 타입입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}
// void로 선언된 변수에는 어떤 값도 넣을 수 없다.
let a: void;
// 단 undefined를 할당할 수 있다.
a = undefined;
// strictNullChecks 타입을 끄면 null을 할당할 수 있음

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
    while (true) {}
}
let b: never;
// a = 1; -> Type 'number' is not assignable to type 'void'. 오류
// never 타입은 어떠한 값도 할당할 수 없음
// undefined, null, any조차도