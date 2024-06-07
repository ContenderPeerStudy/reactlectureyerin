// book 컴포넌트의 상위 컴포넌트
import React from "react";
import Book from "./book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리엑트" numOfPage={500} />
    </div>
  );
}

export default Library;

// library 컴포넌트는 총 3개의 book 컴포넌트를 렌더링하고 있습니다.
// 이 코드도 방금 전 book 컴포넌트 코드와 마찬가지로 굉장히 가독성이 높다.
// 이처럼 jsx를 사용해서 코드를 작성하면 많은 장점이 있다.
//
