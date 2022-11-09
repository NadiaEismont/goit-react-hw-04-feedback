import React from 'react';
import { PropTypes } from 'prop-types';
import { ChangeColor, MainButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ChangeColor>
    {options.map(option => (
      <MainButton
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </MainButton>
    ))}
  </ChangeColor>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
