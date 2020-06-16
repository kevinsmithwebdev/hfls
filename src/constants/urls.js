// const BASE = 'http://localhost:8080';
const BASE = 'https://kswd-hfls.herokuapp.com';


export default {
  LOGIN_CHECK: `${BASE}/user/check/{{username}}`,
  STORE_ALL: `${BASE}/store/all`,
  STORIES_ALL: `${BASE}/stories/all`,
  TOGGLES_ALL: `${BASE}/toggles/all`,
}
