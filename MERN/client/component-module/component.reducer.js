import { componentActions }      from './component.constants';

const initState = {
  userList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case componentActions.FETCHING_USERS_LIST:
      state.fetchingData = true;
      return state;
    case componentActions.SET_USER_LIST:
      state.userList = action.userList;
      return state;
    default:
      return state;
  }
};
