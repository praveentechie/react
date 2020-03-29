import { homeActions }  from './home.constants';

export const editUserName = (value) => {
  return(dispatch)=> {
    dispatch({
      type: homeActions.EDIT_USER_NAME,
      value
    });
  };
};
