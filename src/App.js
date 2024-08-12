import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Item from './Sidebar';
import Target from './MainArea';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="sidebar">
          <Item name="Image" type="image" />
          <Item name="Text" type="text" />
        </div>
        <div className="main">
          <Target />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
