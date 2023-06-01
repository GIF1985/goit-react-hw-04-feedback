import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div className={styles.statistics}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
