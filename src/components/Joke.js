import React from 'react';
import './../App.css';
import Loading from './Loading.js';

class Joke extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      type: '',
      setup: '',
      punchline: ''
    };

    this.onGetJoke = this.onGetJoke.bind(this);
  }

  onGetJoke(event) {
    event.preventDefault();

    this.setState({
      loading: true
    });

    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          id: data.id,
          type: data.type,
          setup: data.setup,
          punchline: data.punchline,
          loading: false
        })
      );
  }

  render() {
    return (
      <section className="wrapper-joke">
        <div>
          <div>
            {this.state.loading ? (
              <Loading />
            ) : (
              <div>
                {' '}
                {this.state.setup} <br /> {this.state.punchline}
              </div>
            )}
          </div>
        </div>

        <input
          type="button"
          value="Get new joke"
          onClick={this.onGetJoke}
          className="joke-button"
        />
        <span>Please press the button to laugh!</span>
      </section>
    );
  }
}

export default Joke;
