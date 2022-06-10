// npm i styled-components
// install the extension : vscode-styled-components
import styled, { keyframes } from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const rotation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Text = styled.h1`
  color: white;
  animation: ${rotation} 5s linear infinite;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  width: 300px;
  height: 300px;
  ${Text} {
    &:hover {
      opacity: 0;
    }
  }
`;
// &{컴포넌트명} 의 형태로 내부 요소를 잡아주면 지정된 태그의 종류에 영향받지 않는다.
// 위의 경우 Box 안에 있는 Text만 잡아줄 수 있다.

const Circle = styled(Box)`
  border-radius: 50%;
  h1 {
    color: tomato;
    &:hover {
      color: white;
    }
  }
`;
// 컴포넌트 내부에 있는 일반 태그명을 선택자로 타케팅 할 수 있다.
// hover등의 기능은 &:에 붙여서 사용한다.

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 32px;
  color: white;
  background-color: tomato;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 400;
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "test styled component attrs",
})`
  background-color: #f2f2f2;
  width: 300px;
  height: 32px;
  margin-right: 8px;
  padding: 8px;
  border-radius: 4px;
`;
// styled components can use 'attrs' to give a property for all components
// styled component makes a random class name

function App() {
  return (
    <div>
      <Wrapper>
        <Box bgColor="tomato">
          <Text as="p">HELLO</Text>
          <Text>HELLO</Text>
        </Box>
        <Circle bgColor="bisque">
          <h1>WORLD</h1>
        </Circle>
      </Wrapper>
      <Wrapper as="section">
        <Button>Button</Button>
        <Button as="a" href="/">
          Anchor
        </Button>
      </Wrapper>
      <Wrapper>
        <Input />
        <Input />
      </Wrapper>
    </div>
  );
}

// component에서 as 속성을 사용하면 같은 스타일 컴포넌트를 다른 태그로 활요할 수 있다.

export default App;
