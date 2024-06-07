import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
}

export default Book;

// book 컴포넌트는 props로 namne과 numofpage 를 받아서 이를 출력하는 컴포넌트입니다.
// JavaScript를 모르거나 JSX에 대해 모르는 사람이 봐도 어떤 역할을 하는지 대강 이해할 수 있는 수준이다.
// JSX를 사용하면 이처럼 가독성이 놓고 직관적인 코드를 작성할 수 있다.
