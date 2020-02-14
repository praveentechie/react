import UserAPI    from '../api/AppAPI';
import Constants  from '../constants/UserConstants';

export const initUsers = () => {
  return(dispatch)=> {
    dispatch({type: Constants.FETCHING_USERS_LIST});
    UserAPI.getAllUsers().then(res => {
      console.log('res', res);
      dispatch({
        type: Constants.SET_USER_LIST,
        userList: res.entity
      });
    }).catch(err => {
      console.log('err', err);
    })
  };
};
