export default () => {
  return fetch('http://localhost:8080/toggles/all')
    .then(res => res.json());
};
