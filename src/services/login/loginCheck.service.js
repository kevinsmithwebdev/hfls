import urls from '../../constants/urls';

const loginCheckService = username => {
  const url = urls.LOGIN_CHECK.replace('{{username}}', username);

  return fetch(url).then(res => res.json());
};

export default loginCheckService;
