import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppCss } from './App.js'
import Header from './components/header/header';
import HomePage from './components/page/homePage';
import ExtraPage from './components/page/extraPage';
import DataBasePage from './components/page/dataBasePage';
import Layout from './components/layout/layout.js';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/extra" component={ExtraPage} />
              <Route exact path="/database" component={DataBasePage} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
