const reducer = (state = false, action) => {
  switch (action.type) {
    case 'TOG':
      return !state;
    default:
      return state;
  }
};

export default reducer;
