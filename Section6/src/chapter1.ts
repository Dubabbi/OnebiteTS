/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: '이정환',
    age: 27,
    position: 'developer',
    work() {
        console.log("일함");
    },
}
// 클래스 자체가 하나의 타입으로도 만들어질수 있다.
// 이러한 필드와 메서드가 있으면 Employee 타입이라고 하자!
class Employee {
    //필드
    name: string;
    age: number;
    position: string;
    //생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;
    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        // super를 생략하면 오류 발생한다.
        super(name, age, position)
        this.officeNumber = officeNumber
    }
}

const employeeB = new Employee("김민경", 27, "개발자")
console.log(employeeB)
const employeeC: Employee = {
    name: "망고킴",
    age: 0,
    position: '개발자',
    work() {

    }
}