import fetch from 'cross-fetch';

export const FETCH_JOKE_BEGIN = 'FETCH_JOKE_BEGIN';
function fetchJokeBegin() {
  return {
    type: FETCH_JOKE_BEGIN
  };
}

export const FETCH_JOKE_SUCCESSS = 'FETCH_JOKE_SUCCESSS';
function fetchJokeSuccess(data) {
  return {
    type: FETCH_JOKE_SUCCESSS,
    payload: { joke: data }
  };
}

export function fetchJoke() {
  return (dispatch) => {
    dispatch(fetchJokeBegin());
    return fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchJokeSuccess(json));
        return json;
      });
  };
}

