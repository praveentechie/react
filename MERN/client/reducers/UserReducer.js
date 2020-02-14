import Constants      from '../constants/UserConstants';

const initState = {
  userList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case Constants.FETCHING_USERS_LIST:
      state.fetchingData = true;
      return state;
    case Constants.SET_USER_LIST:
      state.userList = action.userList;
      return state;
    default:
      return state;
  }
};
