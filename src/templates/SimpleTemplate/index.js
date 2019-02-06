import React, {Component} from 'react';
import PropTypes from 'prop-types';

const style = {
  backgroundColor: 'red',
  fontSize: 22,
};

class SimpleTemplate extends Component {
  render() {
    return <div style={style}>{this.props.children}</div>;
  }
}

SimpleTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default SimpleTemplate;
