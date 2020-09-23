import React from 'react';
import PropTypes from 'prop-types';

function Bio(props) {
  return (
    <React.Fragment>
      <p>{props.bio}</p>
    </React.Fragment>
  )
}

Bio.propTypes = {
  bioText: PropTypes.string
}

export default Bio;