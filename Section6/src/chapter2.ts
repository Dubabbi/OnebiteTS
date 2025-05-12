/**
 * 접근제어자
 * access modifier
 * 클래스를 만들때 특정 필드나 메서드에 접근할 수 있는 범위
 * public : 가장 기본적인 접근제어자, 인스턴스의 프로퍼티에 접근가능, 아무런 제약이 없음
 * private : 가장 제한적, 클래스 내부가 아니면 어디서든 접근 불가능, 메서드 안에서는 접근가능, 인스턴스에서는 접근X
 * proteced : 외부에서는 접근 불가, 파생 내부에서는 접근 가능 => public, private 중간
 */

// 이러한 필드와 메서드가 있으면 Employee 타입이라고 하자!
class Employee2 {
    //필드
    // private name: string;
    // protected age: number;
    // position: string;

    //생성자
    // 생성자의 접근제어자를 달면 그 이름을 가지고 필드와 값 초기화도 자동으로 해줌
    constructor(private name: string, protected age: number, public position: string) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }
    //메서드
    work() {
        console.log("일함");
    }
}

const employee3 = new Employee2("김민경", 27, '개발자')
// employee3.name = '홍길동'
// employee3.age = 30;