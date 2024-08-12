// reducer.js
const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId ? { ...item, ...action.payload.newProps } : item
        )
      };
    default:
      return state;
  }
};

export default reducer;