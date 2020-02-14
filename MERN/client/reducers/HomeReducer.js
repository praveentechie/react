import Constants  from '../constants/HomeConstants';

let initialState = {
  user: 'AP'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.EDIT_USER_NAME:
      return {user: action.value};
    default:
      return state;
  }
};
