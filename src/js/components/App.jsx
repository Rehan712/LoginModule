import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './Login';
import Students from './Students';

class App extends Component {
  render() {
    console.log('these are the props in app', this.props);
    return (
      <div className="app">
        <AppBar position="static">
          <Tabs value={0} onChange={this.handleChange}>
            <Link to="/login">
              <Tab label="Login" />
            </Link>
            <Link to="/student">
              <Tab label="Item Two" />
            </Link>
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/student"
            render={routeProps => {
              return <Students history={routeProps.history} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

export default App;
