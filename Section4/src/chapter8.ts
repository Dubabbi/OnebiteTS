
/**
 * 서로소 유니온 타입 : 태그를 붙여서 객체를 완벽히 구분함
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 * 두 타입 간의 공통으로 포함된 타입이 하나도 없는 경우 - 서로소 관계에 있다!
 */
//tag가 있기때문에 Admin, Member, Guest 아무 연관없는 서로소 집합 형태로 바뀜!
type Admin = {
    tag: "ADMIN"; // 스트링 리터럴 타입으로 정의되어있다!
    name: string;
    kickCount: number;
  };
  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };
  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };
  type User = Admin | Member | Guest; //서로소 유니언타입이 된다!
  
  // Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
  // Member => {name}님 현재까지 {point}모았습니다.
  // Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
  
  function login(user: User) {
    switch (user.tag) {
      case "ADMIN": {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
        break;
      }
      case "MEMBER": {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
        break;
      }
      case "GUEST": {
        console.log(`${user.name}님 현재가지 ${user.visitCount}번 오셨습니다.`);
        break;
      }
    }
  }
  
  /** 복습겸 한가지 더 사례 */
  
  // 비동기 작업의 결과를 처리하는 객체
  type LoadingTask = {
    state: "LOADING";
  };
  type FailedTask = {
    state: "FAILED";
    error: {
      message: string;
    };
  };
  type SuccessTask = {
    state: "SUCCESS";
    response: {
      data: string;
    };
  };
  type AsyncTask = LoadingTask | FailedTask | SuccessTask; //서로소 유니언 타입이다!
  
  // 로딩중 -> 콘솔에 로딩중 출력
  // 실패 -> 실패 : 에러메세지 출력
  // 성공 -> 성공 : 데이터를 출력
  function processResult(task: AsyncTask) {
    switch (task.state) {
      case "LOADING": {
        console.log(`로딩 중`);
        break;
      }
      case "FAILED": {
        console.log(`에러발생 : ${task.error.message}`);
        break;
      }
      case "SUCCESS": {
        console.log(`성공 : ${task.response.data}`);
        break;
      }
    }
  }
  
  const loading: AsyncTask = {
    state: "LOADING",
  };
  const failed: AsyncTask = {
    state: "FAILED",
    error: {
      message: "오류 발생 원인은~~",
    },
  };
  const success: AsyncTask = {
    state: "SUCCESS",
    response: {
      data: "성공하였습니다",
    },
  };
  