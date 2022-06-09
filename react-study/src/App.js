// npm i styled-components
// install the extension : vscode-styled-components
import styled from "styled-components";
import "./App.css";

const BigDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  width: 300px;
  height: 300px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.h1`
  color: white;
`;

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
      <BigDiv>
        <Box bgColor="tomato">
          <Text>HELLO</Text>
        </Box>
        <Circle bgColor="bisque">
          <Text>WORLD</Text>
        </Circle>
      </BigDiv>
      <BigDiv as="section">
        <Button>Button</Button>
        <Button as="a" href="/">
          Anchor
        </Button>
      </BigDiv>
      <BigDiv>
        <Input />
        <Input />
      </BigDiv>
    </div>
  );
}

// component에서 as 속성을 사용하면 같은 스타일 컴포넌트를 다른 태그로 활요할 수 있다.

export default App;
