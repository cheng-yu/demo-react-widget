import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import './App.css';
import Item from './components/SidebarItem';
import MainArea from './components/MainArea';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <div className="sidebar">
            <Item name="Image" type="image" />
            <Item name="Text" type="text" />
          </div>
          <div className="main">
            <MainArea />
          </div>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
