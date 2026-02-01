import React from 'react';
import './PaymentRequired.css';

export default function PaymentRequired({ onPay }) {
  return (
    <div className="payment-required">
      <h2>402 — Payment Required</h2>
      <p>Access to this feature requires an active subscription or payment.</p>
      {/* <div className="pr-actions">
        <button className="pr-button" onClick={onPay}>Pay / Upgrade</button>
      </div> */}
    </div>
  );
}
