// reducer.js
const initialState = {
  items: [],
  selectedItem: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'UPDATE_ITEM':
      let selectedItem = { ...state.selectedItem, ...action.payload.newProps };
      return {
        ...state,
        items: state.items.map((item) => item.id === action.payload.itemId ? selectedItem : item),
        selectedItem
      };
    case 'SELECT_ITEM':;
      return {
        ...state,
        selectedItem: state.items.find((item) => item.id === action.payload.itemId) 
      };
    case 'UNSELECT_ITEM':
      return {
        ...state,
        selectedItem: null
      };
    default:
      return state;
  }
};

export default reducer;