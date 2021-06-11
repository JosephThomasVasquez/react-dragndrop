import React, { useState, useMemo } from "react";

const mousePosition = { x: 0, y: 0 };

const Draggable = ({ children }) => {
  // Set state parameters
  const [dragItem, setDragItem] = useState({
    isDragging: false,
    origin: mousePosition,
    translation: mousePosition,
  });

  // Set styles
  const styles = useMemo(
    () => ({
      cursor: dragItem.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: `translate(${dragItem.translation.x}px, ${dragItem.translation.y}px)`,
      transition: dragItem.isDragging ? "none" : "transform 0.5s",
      zIndex: dragItem.isDragging ? 2 : 1,
      position: dragItem.isDragging ? "absolute" : "relative",
    }),
    [dragItem.isDragging, dragItem.translation]
  );

  return <div>{children}</div>;
};

export default Draggable;
