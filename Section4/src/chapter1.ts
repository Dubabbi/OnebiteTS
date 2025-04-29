// 타입은 집합이다
// 집합 : 동일한 속성을 갖는 동일한 원소를 하나의 단위로 나타내는 것
// number literal Type은 number Type의 부분집합이다!
// number Type(슈퍼타입, 부모타입), number literal Type(서브타입, 자식타입)

// 타입 호환성 : 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
// Number타입(직사각형) <- Numer 리터럴 타입(정사각형)(O)
// Number 타입 -> Number 리터럴 타입(X)

// 서브타입의 값을 슈퍼타입으로 취급하는 것을 업캐스팅이라고 한다.
// (작은 곳에서 큰 곳으로 업!)
let num1 : number = 10;
let num2 : 10 = 10; // Numer 리터럴 타입
num1 = num2

// 슈퍼타입의 값을 서브타입으로 취급하는 것을 다운캐스팅이라고 한다.
let num3 : number = 10;
let num4 : 10 = 10; // Numer 리터럴 타입
// num4 = num3 (❌) 
// 왜 안될까? num2는 리터럴타입이고 num1은 number이다!