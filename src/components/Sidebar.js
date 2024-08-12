import React from 'react';
import { connect } from 'react-redux';
import Item from './SidebarItem';
import './Sidebar.css';

const Sidebar = ({ selectedItem }) => {
  return (
    <div>
      { selectedItem ? (
        <div className='container'>
          <h1>{selectedItem.name}</h1>
          <p>{selectedItem.type}</p>
        </div>
      ) : (
        <div className='container'>
          <Item name="Image" type="image" />
          <Item name="Text" type="text" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem
});

export default connect(mapStateToProps)(Sidebar);