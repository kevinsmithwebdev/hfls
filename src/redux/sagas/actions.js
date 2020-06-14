// actions

const namespace = 'SAGA';

export const SAGA_GENESIS = `${namespace}/GENESIS`;
export const SAGA_LOGIN = `${namespace}/LOGIN`;
export const SAGA_GET_STORIES = `${namespace}/STORIES/GET_STORIES`;
export const SAGA_TOGGLES = `${namespace}/TOGGLES`;

// action creators

export const genesisSagaAC = () => ({ type: SAGA_GENESIS });
export const loginSagaAC = (username, password) => ({ type: SAGA_LOGIN, payload: { username, password } });
export const getStoriesSagaAC = level => ({ type: SAGA_GET_STORIES, payload: { level } });
export const togglesSagaAC = () => ({ type: SAGA_TOGGLES });
