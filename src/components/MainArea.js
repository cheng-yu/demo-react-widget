import React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import { addItem, selectItem, unselectItem } from '../actions';
import './MainArea.css';

const MainArea = ({ items, addItem, selectItem, unselectItem }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['image', 'text'], // 接受的拖曳類型
    drop: (item) => {
      addItem(item);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} 
        className={`target ${canDrop ? 'can-drop' : ''} ${isOver ? 'is-over' : ''}`} 
        onClick={() => { unselectItem() }}>
      {items.map(item => (
        <div key={item.id} onClick={(event) => { 
          selectItem(item.id);
          event.stopPropagation();
        }}>
          {item.type === 'image' ? (
            <img src={item.src} alt={item.value} width={item.width} height={item.height} />
          ) : (
            <p>{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  selectItem: (itemId) => dispatch(selectItem(itemId)),
  unselectItem: () => dispatch(unselectItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);
