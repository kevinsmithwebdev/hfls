const selectToggles = state => state.toggles;

const getToggleSelector = (state, toggle, defaultValue) =>
  state =>
    (selectToggles(state).result && selectToggles(state).result[toggle])
    || defaultValue;


export const selectLessonsToggle = state => getToggleSelector(state, 'lessons', false);
export const selectLoginToggle = state => getToggleSelector(state, 'login', false);
