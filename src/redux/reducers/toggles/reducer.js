import createReqestTypes from '../../helpers/createRequestTypes';
import createReqestReducer from '../../helpers/createRequestReducer';
import createReqestActionCreators from '../../helpers/createRequestActionCreators';

// actions and action creators
const NAME_SPACE = 'TOGGLES'

export const TogglesType = createReqestTypes(NAME_SPACE);
export const TogglesAction = createReqestActionCreators(NAME_SPACE);
// reducer

const initialState = {
  lessons: false,
  login: false,
};

export default createReqestReducer(TogglesType);
