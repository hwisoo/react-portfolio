import React from 'react';

const footerStyle = {
  backgroundColor: '#003399',
  fontSize: '15px',
  color: 'white',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '30px',
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
