// npm i styled-components
// install the extension : vscode-styled-components
import styled from "styled-components";

const BigDiv = styled.div`
  display: flex;
`;

const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  width: 300px;
  height: 300px;
`;

const DivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  width: 300px;
  height: 300px;
`;

const Text = styled.h1`
  color: white;
`;

// styled component makes a random class name

function App() {
  return (
    <BigDiv>
      <DivOne>
        <Text>HELLO</Text>
      </DivOne>
      <DivTwo>
        <Text>WORLD</Text>
      </DivTwo>
    </BigDiv>
  );
}

export default App;
