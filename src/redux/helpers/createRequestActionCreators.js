// generate dynamically from types

const createRequestActionCreators = base => ({
  START: () => ({ type: `${base}/START` }),
  SUCCEED: payload => ({ type: `${base}/SUCCEED`, payload }),
  FAIL: error => ({ type: `${base}/FAIL`, payload: { error } }),
  RESET: () => ({ type: `${base}/RESET` }),
})
export default createRequestActionCreators;
