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
      {draggableItems.map((index) => {
        return <Rect key={index}>{index}</Rect>;
      })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Rect = styled.attrs((props) => ({
  style: {},
}))`
  display: flex;
  position: absolute;
  left: calc(50vw - 150px);
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  font-size: 20px;
  color: #777;
  background: crimson;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  user-select: none;
`;
