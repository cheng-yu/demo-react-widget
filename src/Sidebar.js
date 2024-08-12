import React from 'react';
import { useDrag } from 'react-dnd';
import './Sidebar.css';

function Item({ name, type }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type, // 指定拖曳元素的類型
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`item ${isDragging ? 'dragging' : ''}`}>
      {name}
    </div>
  );
}

export default Item;
