// actions.js
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: { ...item, id: Date.now() }
});

export const updateItem = (itemId, newProps) => ({
  type: 'UPDATE_ITEM',
  payload: { itemId, newProps }
});
