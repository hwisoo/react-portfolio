import React from 'react';

const footerStyle = {
  backgroundColor: '#4080bf',
  fontSize: '13px',
  color: 'white',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  paddingBottom: '30px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '10px',
  width: '100%'
};

function Footer() {
  return (
    <div style={footerStyle}>
      <h4>James Cho</h4>
    </div>
  );
}

export default Footer;
