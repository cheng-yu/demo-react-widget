import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './MainArea.css';

function Target() {
  const [items, setItems] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['image', 'text'], // 接受的拖曳類型
    drop: (item) => {
      setItems([...items, item]);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`target ${canDrop ? 'can-drop' : ''} ${isOver ? 'is-over' : ''}`}>
      {items.map((item, index) => (
        <div key={index} className="item">{item.name}</div>
      ))}
    </div>
  );
}

export default Target;
