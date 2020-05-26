import {
  FETCH_JOKE_BEGIN,
  FETCH_JOKE_SUCCESSS
} from './../actions/jokeActions.js';

const initialState = {
  joke: {
    id: '',
    type: '',
    setup: '',
    punchline: ''
  },
  loading: false
};

export default function jokeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKE_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOKE_SUCCESSS:
      return {
        joke: action.payload.joke,
        loading: false
      };

    default:
      return state;
  }
}
