// actions.js
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item
});

export const updateItem = (itemId, newProps) => ({
  type: 'UPDATE_ITEM',
  payload: { itemId, newProps }
});
