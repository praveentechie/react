import UserAPI               from '../api/AppAPI';
import { componentActions }  from './component.constants';

export const initUsers = () => {
  return(dispatch)=> {
    dispatch({type: componentActions.FETCHING_USERS_LIST});
    UserAPI.getAllUsers().then(res => {
      console.log('res', res);
      dispatch({
        type: componentActions.SET_USER_LIST,
        userList: res.entity
      });
    }).catch(err => {
      console.log('err', err);
    })
  };
};
