import Constants  from '../constants/HomeConstants';

export const editUserName = (value) => {
  return(dispatch)=> {
    dispatch({
      type: Constants.EDIT_USER_NAME,
      value
    });
  };
};
