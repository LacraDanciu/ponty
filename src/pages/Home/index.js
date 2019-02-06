import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SimpleTemplate} from 'templates';

class Home extends Component {
  render() {
    return (
      <SimpleTemplate>
        <h1>Welcome home!</h1>
        <Link to="/users"> Users</Link>
      </SimpleTemplate>
    );
  }
}

export default Home;
