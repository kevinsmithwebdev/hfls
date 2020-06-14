
import { combineReducers } from 'redux'

import level from './level/reducer';
import toggles from './toggles/reducer';
import stories from './stories/reducer';
import user from './user/user.reducer';

const reducers = combineReducers({
  level,
  stories,
  toggles,
  user,
});

export default reducers