// actions.js
export const addItem = (item) => {
  let payload = { ...item, id: Date.now() };
  if (item.type === 'image') {
    payload = { ...payload, src: 'logo192.png', width: 100, height: 100, value: 'This is an Image' };
  } else {
    payload = { ...payload, value: 'This is a Text' };
  }
  
  return {
    type: 'ADD_ITEM',
    payload
  }
};

export const selectItem = (itemId) => ({
  type: 'SELECT_ITEM',
  payload: { itemId }
});

export const unselectItem = () => ({
  type: 'UNSELECT_ITEM'
});

export const updateItem = (itemId, newProps) => ({
  type: 'UPDATE_ITEM',
  payload: { itemId, newProps }
});
