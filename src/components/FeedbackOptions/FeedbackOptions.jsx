import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(item => (
    <button
      type="button"
      name={item}
      onClick={() => onLeaveFeedback(item)}
      key={item}
    >
      {item}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
  
export default FeedbackOptions;
