/** Unknown타입*/
// 모든 타입의 슈퍼타입
function unknownExam() {
    // 모든 값을 다 넣을 수 있다!(모든 타입의 슈퍼타입이기 때문이다!)
    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    // 다운캐스팅
    // let num : number = unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean = unknownVar;
}

/** Never : 불가능, 모순을 의미 -> 어떤값도 저장하면 안돼!
 * 모든 타입의 서브타입이다!
 * 모든 집합의 부분집합이다
 * 공집합
*/
function neverExam() {
    // function neverFunc(): never { // 공집합 : 반환할 수 있는 값의 종류가 아무것도 없다
    //     while (true) 
    // }
    // let num: number = neverFunc();
    // let str: string = neverFunc();
    // let bool: boolean = neverFunc(); (가능한 코드)

    // 어떤 값도 저장되면 안되는 변수의 타입으로 저장하면 좋다!
    // let never1:never = 10;
    // let never2:never = "string";
    // let never3:never = true;
}

/** Void 타입
 * 반환값이 없는 함수의 반환값 타입을 사용
 * undefined타입의 슈퍼타입이다
 */
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined
    }
    let voidVar: void = undefined; //가능 : 업캐스팅
}

/**any타입 (치트키타입) 계층도를 완전히 무시한다
 * 모든 타입의 슈퍼타입으로 위치하기도하고 모든 타입의 서브타입으로도 위치하기도함(never빼고)
*/
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    // let neverVar :never;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar // never 타입은 정말 순수한 공집합이기때문에 어떤 타입도 다운캐스팅 할 수 없다.(any도)
}