import React from 'react';
import { useDrag } from 'react-dnd';
import './SidebarItem.css';

function Item({ name, type }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type, // 指定拖曳元素的類型
    item: { name, type },
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
