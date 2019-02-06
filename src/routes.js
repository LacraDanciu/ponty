import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Contact, Home, Users} from 'pages';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
