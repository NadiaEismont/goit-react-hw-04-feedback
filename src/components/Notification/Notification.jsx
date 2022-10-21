import { PropTypes } from 'prop-types';
import React from 'react';
const Notification = ({ message }) => <p>{message}</p>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
