import { rejects } from "assert";
import { resolve } from "path";

{/* 프로미스 */}

// 비동기처리를 실제로 하는 함수
// promise는 resolve나 reject를 호출해서 전달하는 비동기작업의 결과값의 타입을
// 자동으로 추론할 수 없다. 기본적으로 unknown으로 추론

// promise는 제네릭 클래스를 기반으로 타입이 선언되어있음
// 비동기처리의 결과값을 타입으로 정의할 수는 있지만
// reject 즉, 실패했을때 타입은 정할 수 없다.

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~때문에 실패함");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/* 프로미스를 반환하는 함수의 타입을 정의 */
interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}
const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});