/**
 * 타입 단언(type assertion)
 * 아무 상황에서 쓰면 안된다. 
 */
type Person = {
    name: string;
    age: number;
  };
  // 초기화해두고 프로퍼티의 값을 초기화 시켜주고 싶을 때
  // 원하는 기능을 만들기 어려울때 초기화타입을 단언해준다!
  let person: Person = {} as Person;
  person.name = "김민경";
  person.age = 26;
  
  type Dog = {
    name: string;
    color: string;
  };
  let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  } as Dog;
  
  /**타입 단언의 규칙
   * 값 as 단언 <- 단언식
   * A as B
   * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야함
   */
  
  let num1 = 10 as never; // A가 B의 슈퍼타입이다!
  let num2 = 10 as unknown; // A가 B의 서브타입이다!
  // let num3 = 10 as string; // A가 B의 슈퍼타입도, 서브타입도 아니다. 
  // ㄴ let num3 = 10 as unknown as string (오류해결: 좋은 방법은 아님)
  
  /**
   * const 단언
   * const로 선언했을때와 동일하게 !
   */
  let num4 = 10 as const;
  
  let cat = {
    name: "야옹이",
    color: "yellow",
  } as const; //모든 프로퍼티가 읽기전용. readonly 프로퍼티가 된 객체로 추론
  
  // cat.name ='' //읽기 전용 속성이므로 'name'에 할당할 수 없다.
  
  
  /** Non Null 단언 : 어떤 값이 null | undefined이 아니다!*/
  type Post = {
    title: string;
    author?: string;
  };
  
  let post: Post = {
    title: "게시글1",
    author: "김익명",
  };
  // !은  Non Null이 아닐거야! author는 진짜 있어!
  const len: number = post.author!.length;