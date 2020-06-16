import urls from '../../constants/urls';

export default () => {
  const url = urls.TOGGLES_ALL;
  return fetch(url).then(res => res.json());
};
