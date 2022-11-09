import React from 'react';
import { PropTypes } from 'prop-types';
import { OptionsName } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <OptionsName>Good : {good}</OptionsName>
    <OptionsName>Neutral : {neutral}</OptionsName>
    <OptionsName>Bad : {bad}</OptionsName>
    <OptionsName>Total : {total}</OptionsName>
    <OptionsName>Positive feedback : {positivePercentage} %</OptionsName>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
