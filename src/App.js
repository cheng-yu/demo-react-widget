import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <div className="sidebar">
            <Sidebar />
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
