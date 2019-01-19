import React from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

const QRCodeView = ({ address, amount, bolt11, bitcoinOnly }) => {
  let uri = `bitcoin:${address}?amount=${amount}`;
  if (bitcoinOnly) {
    uri = `bitcoin:${address}?amount=${amount}&lightning=${bolt11}`;
  }

  return (
    <div id="qr-main">
      <QRCode value={uri} renderAs="svg" style={{ width: '503px', height: '503px', maxHeight: '503px' }} />
    </div>
  );
};

QRCodeView.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  bolt11: PropTypes.string.isRequired,
};

export default QRCodeView;
