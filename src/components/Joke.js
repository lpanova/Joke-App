import React, { useState, useEffect } from 'react';
import './../App.css';
import Loading from './Loading.js';

function Joke() {
  const [joke, onSetJoke] = useState({
    id: '',
    type: '',
    setup: '',
    punchline: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(test, [loading]);

  function test() {
    console.log('loading:' + loading);
    if (loading) {
      fetchJoke();
    }
  }

  function onClick() {
    setLoading(true);
  }

  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => {
        onSetJoke({
          id: data.id,
          type: data.type,
          setup: data.setup,
          punchline: data.punchline
        });

        setLoading(false);
      });
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
