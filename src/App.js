import styled from "styled-components";
import Draggable from "./components/Draggable";

function App() {
  return (
    <Container>
      <Draggable>
        <Rect />
      </Draggable>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Rect = styled.div`
  width: 200px;
  height: 200px;
  background: crimson;
`;
