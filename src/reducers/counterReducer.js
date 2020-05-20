const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_WITH_VALUE':
      return state + action.payload.number;
    case 'DECREMENT_WITH_VALUE':
      return state - action.payload.number;
    default:
      return state;
  }
};

export default counterReducer;
