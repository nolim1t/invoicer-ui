import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import { Spinner } from '@blueprintjs/core';

const StatusMessage = ({ message , displaySpinner}) => {

  return (
    <div id="sm-main">
      <div id="sm-message">{message}</div>
      {displaySpinner && <div id="sm-spinner"><Spinner size={100} /></div>}
    </div>
  );
}

export default StatusMessage;
