import { homeActions } from './home.constants';

const initialState = {
  user: 'AP'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case homeActions.EDIT_USER_NAME:
      return { user: action.value };
    default:
      return state;
  }
};
