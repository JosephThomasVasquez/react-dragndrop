import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "./components/Draggable";
import { range } from "lodash";

const maxRange = 5;

function App() {
  const draggableItems = range(maxRange);

  const [dragState, setDragState] = useState({
    order: draggableItems,
    dragOrder: draggableItems,
    draggableIndex: null,
  });

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
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;
