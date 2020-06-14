export const requestTypeSuffixes = ['START', 'FAIL', 'SUCCEED', 'RESET'];

const createRequestTypes = base => {
  const requestTypes = {};
  requestTypeSuffixes.forEach(rt => requestTypes[rt] = `${base}/${rt}`);
  return requestTypes;
};
export default createRequestTypes;
