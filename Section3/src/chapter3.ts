// object

// 객체 리터럴 타입
// object 타입을 정의할 때 object로 타입을 결정하는 것이 아닌
// property, method 즉 객체의 구조에 따라 타입을 결정한다.
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "red",
};

// ?는 선택적 프로퍼티 or 옵셔널 프로퍼티
// 옵셔널 프로퍼티는 객체의 프로퍼티가 존재할 수도 있고 안 할 수도 있을 때 사용
user = {
    name: "홍길동",
};

// readonly는 만약 이 프로퍼티의 값이 변경되서는 안되는 경우(읽기전용)에 사용
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};
