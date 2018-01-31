import React from 'react';
import {Link, Route} from 'react-router-dom';

//Components
import ButtonContainer from '../ButtonContainer';
// import Component from '../Component';
class Main extends React.Component {
  render() {
    return (
      <div className="hub">
        <div className="hub-sidebar">
          <div className="hub-sidebar__section">
            <h4>Documentation</h4>
            <div className="hub-sidebar__section__nav">
              <ul className="hub-sidebar__section__nav__list">
                <li className="hub-sidebar__section__nav__list__item">
                  <Link to="/">Introduction</Link>
                </li>
                <li className="hub-sidebar__section__nav__list__item">
                  <Link to="/">Getting Started</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hub-sidebar__section">
            <h4>Components</h4>
            <div className="hub-sidebar__section__nav">
              <ul className="hub-sidebar__section__nav__list">
                <li className="hub-sidebar__section__nav__list__item">
                  <Link to="/button">Button</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hub-content">
          <div className="hub-container">
            <div className="hub-row">
              <div className="hub-column hub-width-sm-8">
                <Route exact path="/button" component={ButtonContainer} />
                <Route
                  exact
                  path="/"
                  render={() => {
                    return (
                      <div className="hub-content">
                        <div className="hub-container">
                          <div className="hub-row">
                            <h3>Please select a element.</h3>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                />
                {/* <Route
              path={this.props.match.url}
              render={() => <h3>Please select a element.</h3>}
            /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
