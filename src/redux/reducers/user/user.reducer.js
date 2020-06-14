// actions

const NAME_SPACE = 'USER'

export const LOG_IN = `${NAME_SPACE}/LOG_IN`;
export const LOG_OUT = `${NAME_SPACE}/LOG_OUT`;

// action creators

export const logInAC = username => ({ type: LOG_IN, payload: { username } });
export const logOutAC = () => ({ type: LOG_OUT });

// reducer

const initialState = {
  isLoggedIn: false,
  username: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      }

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        username: '',
      }

    default:
      return state;
  }
};