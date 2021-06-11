import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "./components/Draggable";
import { range } from "lodash";

// Max range
const maxRange = 5;
const itemHeight = 80;

function App() {
  const draggableItems = range(maxRange);

  // Set draggable state
  const [dragState, setDragState] = useState({
    order: draggableItems,
    dragOrder: draggableItems,
    draggableIndex: null,
  });

  return (
    <Container>
      {draggableItems.map((index) => {
        const topPosition = dragState.order.indexOf(index) * (itemHeight + 10);

        return (
          <Draggable>
            <Rect key={index} top={topPosition}>
              {index}
            </Rect>
          </Draggable>
        );
      })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Rect = styled.div.attrs((props) => ({
  style: {},
}))`
  display: flex;
  position: absolute;
  top: ${({ topPosition }) => `${topPosition}px`};
  left: calc(50vw - 150px);
  justify-content: center;
  align-items: center;
  width: 400px;
  height: ${itemHeight}px;
  font-size: 20px;
  color: crimson;
  background: #eee;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  user-select: none;
`;
