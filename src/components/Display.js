import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Display() {
  return (
    <div />
  );
}

Display.prototype = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
