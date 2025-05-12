/**
 * 인터페이스와 클래스
 */

// interface로 정의하면 무조건 public
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}
// Character는 CharacterInterface를 구현한다
class Character implements CharacterInterface {
    name: string;
    moveSpeed: number;
    constructor(
        name: string, moveSpeed: number) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`)
    }
}