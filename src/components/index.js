import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Grid from './Grid';
import Playground from './Playground';
import style from '../framework/style/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Playground />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
