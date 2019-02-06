import React from 'react';
import PropTypes from 'prop-types';

const Test = (props) => {
  return <div> {props.name}</div>;
};

Test.propTypes = {
  name: PropTypes.string,
};

export default Test;
