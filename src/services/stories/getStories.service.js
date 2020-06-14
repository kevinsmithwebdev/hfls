import urls from '../../constants/urls';

const getStoriesService = key => {
  const url = urls.STORIES_ALL;

  return fetch(url, { headers: { 'x-api-key': key } })
    .then(res => res.json());
};

export default getStoriesService;
