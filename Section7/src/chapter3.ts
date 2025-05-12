{/*제네릭 인터페이스*/}

// 반드시 타입으로 정의할때,할당 타입을 <>와 함께 사용해야한다
// 타입변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할 때는 반드시
// 타입으로 정의할때 타입변수에 할당할 타입을 <>와 함께 사용해야한다
let keyPair: KeyPair<string, number> = {
  key: "key", // string
  value: 0, // number
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["a", "b", "c"],
};
// 객체의 인덱스 시그니처와 함께 사용할 것
interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: -1231,
  key2: 123123,
};
// 하나의 타입으로 굉장히 다양한 타입을 표현
interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};
let booleanMap: Map<boolean> = {
  key: true,
};


{/*제네릭 타입 별칭*/}
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "hello",
};

{/*제네릭 인터페이스의 활용 예시*/}

// 유저 관리 프로그램
// 유저 구분: 학생 구분 /개발자 유저

interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}

//학생만!
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}
const developerUser: User<Developer> = {
  name: "홍길동동",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};
const studentUser: User<Student> = {
  name: "길동이",
  profile: {
    type: "student",
    school: "타입스크립트대학교",
  },
};