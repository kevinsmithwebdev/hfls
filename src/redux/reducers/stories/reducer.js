import createReqestTypes from '../../helpers/createRequestTypes';
import createReqestReducer from '../../helpers/createRequestReducer';
import createReqestActionCreators from '../../helpers/createRequestActionCreators';

// actions and action creators
const NAME_SPACE = 'STORIES'

export const StoriesType = createReqestTypes(NAME_SPACE);
export const StoriesAction = createReqestActionCreators(NAME_SPACE);

// reducer

export default createReqestReducer(StoriesType);
