import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions';
import Item from './SidebarItem';
import './Sidebar.css';

const Sidebar = ({ selectedItem, updateItem }) => {
  return (
    <div>
      { selectedItem ? (
        <div className='container'>
          {
            selectedItem.type === 'image' ? (
              <div>
                <input type="text" defaultValue={selectedItem.height} onChange={(e) => {
                  if (e.target.value.endsWith('px')) {
                    updateItem(selectedItem.id, { height: e.target.value })
                  }
                }} />
                <input type="text" defaultValue={selectedItem.width} onChange={(e) => { 
                  if (e.target.value.endsWith('px')) {
                    updateItem(selectedItem.id, { width: e.target.value })
                  }
                }} />
                <input type="text" defaultValue={selectedItem.src} onChange={(e) => {
                  // check if the value is a valid URL
                  if (e.target.value.match(/(http(s?):)?([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)) {
                    updateItem(selectedItem.id, { src: e.target.value })
                  }
                }} />
              </div>
            ) : (
              <input type="text" value={selectedItem.value} onChange={(e) => updateItem(selectedItem.id, { value: e.target.value })} />
            )
          }
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

const mapDispatchToProps = (dispatch) => ({
  updateItem: (itemId, newProps) => dispatch(updateItem(itemId, newProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);