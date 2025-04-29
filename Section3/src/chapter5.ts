// enum 타입
// 여러 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum에 값으로 숫자할당을 하지 않아도 값이 0부터 자동으로 할당됨

// 숫자형 enum
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// 문자형 enum
enum Language {
    korean = "ko",
    english = "en",
}
// 왜 객체는 let을 사용하지 않고 const를 사용해서 선언할까?
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 관리자 - 0
    korea: Language.korean,
};

const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원 - 1
};

const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트 - 2
};
