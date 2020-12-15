import userService from '../services/user-service';
import { componentActions } from './component.constants';

export const initUsers = () => {
  return (dispatch) => {
    dispatch({ type: componentActions.FETCHING_USERS_LIST });
    userService.getAllUsers().then((res) => {
      console.log('res', res);
      dispatch({
        type: componentActions.SET_USER_LIST,
        userList: res.data
      });
    }).catch((err) => {
      console.log('err', err);
    });
  };
};
