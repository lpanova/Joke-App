const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_WITH_VALUE':
      return state + action.payload.number;
    default:
      return state;
  }
};

export default counterReducer;
