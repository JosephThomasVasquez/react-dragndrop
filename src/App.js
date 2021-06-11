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
  width: 400px;
  height: 200px;
  background: crimson;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0, 0.5);
`;
