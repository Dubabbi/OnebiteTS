// 타입 별칭과 인덱스 시그니처

// 타입 별칭 - 중복되는 타입 선언, 타입 정의를 마치 변수처럼 하게 해줌
// 타입 별칭은 주로 대문자로 시작

// interface vs type?
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};
// type 별칭은 동일한 스코프 내에 중복된 변수명 사용 불가
// type 별칭은 ts -> js로 컴파일 과정에서 사라짐

const func = () => {
    // func라는 스코프 내에서 User라는 type을 선언했는데, "다른"스코프이기 때문에 선언가능
    type User = {};
};

let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

// 인덱스 시그니처
// 키와 값이 수백만개가 존재하면 하나씩 일일이 타입을 선언하는 것은 무리이다.

type CountryCodes = {
    Korea: string;
    UnitedState: string;
    UnitedKingdom: string;
 };

// 여기서 문제 타입 별칭과 인덱스 시그니처를 이용하여 타입을 정의해보세요.
type Data = {
    [key: string]: number | boolean | string;
};
type ProblemType = {
    [key: string]: string | number | Data;
};
let problem: ProblemType = {
    name: "Jiseung",
    data: {
        age: 26,
        isMale: true,
        address: "seoul",
    },
    height: 170,
};

// type CountryCodes = {
//  [key: string]: string;
// };

// 인덱스 시그니처는 타입 정의를 위반하지 않으면 모든 객체를 허용
// let countryCode: CountryCode = {}  not error

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
// 주의 - 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는
// 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 함
// type CountryNumberCodes = {
//     [key: string]: number;
//     Korea: number | string;
// };
// 'Korea' 형식의 'string | number' 속성을 'string' 인덱스 유형 'number'에 할당할 수 없음