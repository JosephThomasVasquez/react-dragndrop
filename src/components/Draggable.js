import React, { useState, useMemo } from "react";

const mousePosition = { x: 0, y: 0 };

const Draggable = ({ children }) => {
  const [dragItem, setDragItem] = useState({
    isDragging: false,
    origin: mousePosition,
    translation: mousePosition
  });

  return <div>{children}</div>;
};

export default Draggable;
