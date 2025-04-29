/**
 * 함수 타입 호환성
 * 특정 함수타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 기준1. 반환값이 호환되는가? 다운캐스팅되면 안됌!
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number 리터럴
a = b; // 업캐스팅 (호환된다)
// b = a; number 리터럴타입 <- number타입 다운캐스팅(호환되지않는다)

// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
// 💡 매개변수를 기준으로 판단할 때는 업캐스팅은 안됌 !!!!!
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c = d; // number타입 = number리터럴타입(업캐스팅) 호환 X
d = c; // number리터럴타입 = number타입 (다운캐스팅)

/**매개변수가 객체타입을 사용하는 예시 */
type Animal = {
    name: string
}
type Dog = {
    name: string;
    color: string;
}
let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
//  animalFunc = dogFunc
dogFunc = animalFunc

//  let testFunc = (animal : Animal)=>{
//     console.log(animal.name)
//     console.log(animal.color)
//  }
let testFunc2 = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

// 2-2. 매개변수의 개수가 다를 때 - 타입이 같은 매개변수를 가정한다!
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => { };
let func2: Func2 = (a) => { };
func1 = func2; // 매개변수2개 <- 매개변수 1개
// func2 = func1; // 매개변수1개 <- 매개변수 2개