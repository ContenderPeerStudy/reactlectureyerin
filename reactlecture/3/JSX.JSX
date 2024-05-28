// class Hello extends React.Component {
//   render() {
//     return <div> Hello {this.props.toWhat} </div>;
//   }
// }

// ReactDOM.render(<Hello toWhat="World" />, document.getElementById("root"));

// // Hello라는 이름을 가진 React 컴포넌트가 나오고 컴포넌트 내부에서 JavaScript 코드와 HTML 코들가 결합된 JSX를 사용하고 있는 것을 볼 수 있다.
// // 그리고 이렇게 만들어진 컴포넌트를 React DOM의 렌더 ㅎ마수를 사용해서 실제 화면에 렌더링 하고 있습니다.

// class Hello extends React.Component {
//   render() {
//     return React.createElement("div", null, `Hello ${this.props.toWhat}`);
//   }
// }

// ReactDOM.render(
//   React.createElement(Hello, { toWhat: "World" }, null),
//   document.getElementById("root")
// );

// // 이 코드는 JSX를 사용하지 않고 순수한 JacaScript 코드만을 사용해서 위 코드와 동일한 역할을 하게 만든 코드입니다.
// // Hello 컴포넌트 내부에서 JSX를 사용했던 부분이 React.createElement로 대체된 것을 확인할 수 있다.
// // 결국 JSX문법을 사용하면 React 에서는 내부적으로 모두 createElememnt 라는 그리고 최종적으로는 createElement함수를 호출한 결과로 JavaScript

// const element = <h1 className="greeting">Hello, world!</h1>;

// const element = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello, world!"
// );

// // 이 두 개의 코드는 JSX를 사용한 코드와 사용하지 않은 코드이며 모두 동일한 역할을 한다. JSX를 사용한 코드도 내부적으로는 createElement 함수를
// // 사용하도록 변환되기 때문

// const element = {
//   type: "h1",
//   props: {
//     className: "greeting",
//     children: "Hello, world!",
//   },
// };

// // 그리고 이 createElement 함수 호출으 결과로 이 코드와 같은 JavaScript 객체가 나오게 된다.
// // React는 이 객체들을 읽어서 DOM을 만드는 데 사용하고 항상 최신 상태로 유지한다.
// // React에서는 이 객체를 element 라고 부른다.
// // 함수의 이름이 createElement 니까 당연히 element를 생성해서 return 힌다.

// React.createElement(type, [props], [...children]);

// // createElement 함수의 파라미터를 나타낸다
// // 첫번째 파라미터는 엘레먼트의 유형, 타입을 나타낸다.
// // 이 유형으로는 div나 span 같은 html태그가 올 수 있고 다른 React 컴포넌트가 들어갈 수 있다
// // 두번째 파라미터로는 props가 들어가게 된다.
// // 마지막 세번째 파라미터로는 childern이 들어가는데, 여기에서 children이란 현재 엘리먼트가 포함하고 있는 자식 엘리먼트라고 보면 된다.
// // 리엑트는 이런식으로 JSX 코드를 모두 createElement 함수를 사용한 코드로 변환된다. 그렇기 때문에 리엑트에서 JSX를 사용한 것이 필수는 아님
// // 왜냐면 직접 모든 코드를 createElement 함수를 사용해서 개발하면 되기 때문
// // 다만 JSX를 사용했을 때 코드가 더욱 간결해지고 생산성과 가독성이 올라기기 때문에 사용하는 것을 권장
// // JSX를 사용하면 장점들이 많기 때문에 편리함
