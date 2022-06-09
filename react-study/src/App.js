// npm i styled-components
// install the extension : vscode-styled-components
import styled from "styled-components";

const BigDiv = styled.div`
  display: flex;
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

// styled component makes a random class name

function App() {
  return (
    <BigDiv>
      <Box bgColor="tomato">
        <Text>HELLO</Text>
      </Box>
      <Circle bgColor="bisque">
        <Text>WORLD</Text>
      </Circle>
    </BigDiv>
  );
}

export default App;
