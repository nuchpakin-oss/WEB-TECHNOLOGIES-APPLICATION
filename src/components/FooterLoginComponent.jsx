import React from 'react';
import './FooterLoginComponent.css';

const FooterLoginComponent = () => {
  return (
    <footer className="footer">

      <div className="footer-section">Services</div>
      <div className="footer-section">Policy</div>
      <div className="footer-section">Order</div>
      <div className="footer-section">Eros</div>

      <div className="footer-section">
        <h3>Admin</h3>

        <p className="social-title">FOLLOW US</p>

        <div className="social-icons">
          <img src="/src/assets/Instragram-logo.png" alt="IG" />
          <img src="/src/assets/FB.png" alt="FB" />
          <img src="/src/assets/X.png" alt="X" />
          <img src="/src/assets/TT.png" alt="TT" />
        </div>
      </div>

      <div className="footer-copy">
        © 2025 Eros. All rights reserved.
      </div>

    </footer>
  );
};

export default FooterLoginComponent;