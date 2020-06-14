const initialState = {
  isWaiting: false,
  value: null,
  error: null,
  result: null,
  timestamp: null,
};

export default (TypeSet, params = {}) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TypeSet.START:
      return {
        isWaiting: true,
        value: payload,
        error: null,
        result: params.idAttribute ? state.result : null,
      };

    case TypeSet.FAIL:
      return {
        ...state,
        isWaiting: false,
        error: payload,
      };

    case TypeSet.SUCCEED:
      return {
        ...state,
        isWaiting: false,
        error: null,
        result: params.idAttribute
          ? { ...state.result, [payload[params.idAttribute]]: payload }
          : payload,
        timestamp: Date.now(),
      };

    case TypeSet.RESET:
      return initialState;

    default:
      return state;
  }
};
