const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NEW_CART':
      const newCartList = state.map((el) => Object.assign({}, el));
      newCartList.push(action.payload);
      return newCartList;

    default:
      return state;
  }
};

export default cartReducer;
