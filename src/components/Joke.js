import React, { useState } from 'react';
import './../App.css';
import Loading from './Loading.js';

function Joke() {
  const [joke, onSetJoke] = useState({
    id: '',
    type: '',
    setup: '',
    punchline: ''
  });

  function onGetJoke(event) {
    event.preventDefault();

    onSetJoke({
      loading: true
    });

    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) =>
        onSetJoke({
          id: data.id,
          type: data.type,
          setup: data.setup,
          punchline: data.punchline,
          loading: false
        })
      );
  }

  return (
    <section className="wrapper-joke">
      <div>
        <div>
          {joke.loading ? (
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
        onClick={onGetJoke}
        className="joke-button"
      />
      <span>Please press the button to laugh!</span>
    </section>
  );
}

export default Joke;
