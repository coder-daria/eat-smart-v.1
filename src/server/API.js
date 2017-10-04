import { BEER_PER_PAGE_LIST } from '../common/constants';

export function fetchMoreBeersFromServer(pageNumber) {
  return fetch(
    `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${BEER_PER_PAGE_LIST}`
  ).then(data => data.json());
}

export function fetchSimilarBeersFromServer(queryParameters) {
  let optionalParameters = '';
  for (let key in queryParameters) {
    let value = queryParameters[key];
    optionalParameters += `&${key}=${value}`;
  }
  const url = `https://api.punkapi.com/v2/beers?per_page=3${optionalParameters}`;
  return fetch(url).then(data => data.json());
}
