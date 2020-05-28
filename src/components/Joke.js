import React, { useEffect } from 'react';
import './../App.css';
import Loading from './Loading.js';
import { fetchJoke } from './../actions/jokeActions';
import { useDispatch, useSelector } from 'react-redux';

function Joke() {
  const loading = useSelector((state) => state.joke.loading);
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  useEffect(onClick, []);

  function onClick() {
    dispatch(fetchJoke());
  }

  return (
    <section className="wrapper-joke">
      <div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              {joke.setup} <br /> {joke.punchline}
            </div>
          )}
        </div>
      </div>

      <input
        type="button"
        value="Get new joke"
        onClick={onClick}
        className="joke-button"
      />
      <span>Please press the button to laugh!</span>
    </section>
  );
}

export default Joke;
