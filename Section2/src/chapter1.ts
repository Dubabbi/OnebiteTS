// number
// 양수, 음수, Infinity, NaN
// 변수 뒤에 :type = 주석(annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// number로 타입이 결정된 변수는 다른 타입에서 사용하는 메서드나 다른 타입값을 할당할 수 없다.

// example
// num1 = "hello world"; 'string' 형식은 'number' 형식에 할당할 수 없다.ts(2322)
// num1.toUpperCase(); 'number' 형식에 'toUpperCase' 속성이 없다.ts(2339)
// 하지만 num1.toFixed() 같은 숫자형 전용 메서드는 당연히 사용할 수 있다.

// string
// "", '', ``, 템플릿 리터럴
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// 기존에는 typescript에는 null 타입이 존재하여 number 타입에 null을 할당할 수 없다.
// 하지만 tsconfig.json에서 'strictNullCheck"에서 false를 지정해주면 null을 할당할 수 있게된다.
// let numA: number = null; 'null' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

// 리터럴 타입
// 리터럴 -> 값
// 리터럴 타입은 타입 안에 포함되는 값 중에 하나를 마치 타입인 것처럼 정의해서 사용할 수 있다.
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;