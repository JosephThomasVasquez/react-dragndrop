import React, { useState, useEffect, useMemo, useCallback } from "react";

const mousePosition = { x: 0, y: 0 };

const Draggable = ({ children }) => {
  // Set state parameters
  const [dragItem, setDragItem] = useState({
    isDragging: false,
    origin: mousePosition,
    translation: mousePosition,
  });

  // Handle mouse down event and get user mouse X and Y positions
  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setDragItem((dragItem) => ({
      ...dragItem,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  // Use effect to update on mouse status using DOM event listeners
  useEffect(() => {
    if (dragItem.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      setDragItem((dragItem) => ({
        ...dragItem,
        translation: mousePosition,
      }));
    }
  }, [dragItem.isDragging, handleMouseMove, handleMouseUp]);

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

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Draggable;
