import React from 'react';
import '../index.css';

const CurrencyExchange = () => {
  return (
    <section className="container" id="currency-rates">
      <div className="currency-section">
        <div className="section-header">
          <h2>Currency Exchange Rates</h2>
          <span className="update-time">Updated: 15:30 Tashkent Time</span>
        </div>

        <div className="currency-grid">
          {/* USD */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">US Dollar</div>
              <div className="currency-code">USD</div>
            </div>
            <div className="currency-rate">12,450 UZS</div>
            <div className="currency-change positive">+0.3%</div>
          </div>

          {/* EUR */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-euro-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">Euro</div>
              <div className="currency-code">EUR</div>
            </div>
            <div className="currency-rate">13,680 UZS</div>
            <div className="currency-change negative">-0.2%</div>
          </div>

          {/* GBP */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-pound-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">British Pound</div>
              <div className="currency-code">GBP</div>
            </div>
            <div className="currency-rate">15,920 UZS</div>
            <div className="currency-change positive">+0.5%</div>
          </div>

          {/* JPY */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-yen-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">Japanese Yen</div>
              <div className="currency-code">JPY</div>
            </div>
            <div className="currency-rate">85.4 UZS</div>
            <div className="currency-change">0.0%</div>
          </div>

          {/* RUB */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-ruble-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">Russian Ruble</div>
              <div className="currency-code">RUB</div>
            </div>
            <div className="currency-rate">135.7 UZS</div>
            <div className="currency-change positive">+1.2%</div>
          </div>

          {/* KRW */}
          <div className="currency-card">
            <div className="currency-flag">
              <i className="fas fa-won-sign"></i>
            </div>
            <div className="currency-info">
              <div className="currency-name">Korean Won</div>
              <div className="currency-code">KRW</div>
            </div>
            <div className="currency-rate">9.4 UZS</div>
            <div className="currency-change negative">-0.3%</div>
          </div>
        </div>

        <div className="currency-notice">
          <i className="fas fa-info-circle"></i>
          <span>Rates are based on Central Bank of Uzbekistan official exchange rates</span>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
