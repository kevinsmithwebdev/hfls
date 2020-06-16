
const NAME_SPACE = 'LEVEL'

export const SELECT_LEVEL= `${NAME_SPACE}/SELECT`;

// action creators

export const selectLevelAC = level => ({ type: SELECT_LEVEL, payload: { level } });

const initialState = {
  selected: 'kinder',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_LEVEL:
      return { selected: payload.level ? payload.level.toLowerCase() : '' }
    default:
      return state;
  }
}
