import React from 'react';
import Loadingsvg from '../Loading.svg';

class Loading extends React.Component {
  render() {
    return <img src={Loadingsvg} alt="Loading" />;
  }
}

export default Loading;
