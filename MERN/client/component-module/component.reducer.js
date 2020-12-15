import { componentActions } from './component.constants';

const initState = {
  userList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case componentActions.FETCHING_USERS_LIST:
      return {
        ...state,
        fetchingData: true
      };
    case componentActions.SET_USER_LIST:
      return {
        ...state,
        userList: action.userList
      };
    default:
      return state;
  }
};
