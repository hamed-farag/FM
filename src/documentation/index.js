import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Framework-UI
import style from '../framework/style/index.scss';

//Componenets
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="*" component={Main} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
