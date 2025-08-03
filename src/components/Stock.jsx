import React from 'react';
import '../index.css';

const StockMarket = () => {
  return (
    <section id="stock-market" className="container">
      <div className="stock-section">
        <div className="section-header">
          <h2>Uzbek Stock Market</h2>
          <a href="#" className="view-all">View All Stocks <i className="fas fa-arrow-right"></i></a>
        </div>

        <div className="stock-filters">
          <button className="stock-filter active">Top Gainers</button>
          <button className="stock-filter">Top Volume</button>
          <button className="stock-filter">All Sectors</button>
          <button className="stock-filter">Financials</button>
          <button className="stock-filter">Commodities</button>
        </div>

        <div className="stock-grid">
          <div className="stock-card">
            <div className="stock-name">UzAuto Motors</div>
            <div className="stock-symbol">UZAM</div>
            <div className="stock-price">12,450 UZS</div>
            <div className="stock-change">+2.3%</div>
          </div>

          <div className="stock-card">
            <div className="stock-name">Almalyk Mining</div>
            <div className="stock-symbol">ALMK</div>
            <div className="stock-price">8,720 UZS</div>
            <div className="stock-change">+1.1%</div>
          </div>

          <div className="stock-card negative">
            <div className="stock-name">Uzbekneftegaz</div>
            <div className="stock-symbol">UZNG</div>
            <div className="stock-price">15,300 UZS</div>
            <div className="stock-change">-0.5%</div>
          </div>

          <div className="stock-card">
            <div className="stock-name">Uzbek Airways</div>
            <div className="stock-symbol">UZAW</div>
            <div className="stock-price">3,450 UZS</div>
            <div className="stock-change">+3.7%</div>
          </div>

          <div className="stock-card negative">
            <div className="stock-name">Tashkent Telecom</div>
            <div className="stock-symbol">TTEL</div>
            <div className="stock-price">5,680 UZS</div>
            <div className="stock-change">-1.2%</div>
          </div>

          <div className="stock-card">
            <div className="stock-name">Samarkand Bank</div>
            <div className="stock-symbol">SMBK</div>
            <div className="stock-price">9,850 UZS</div>
            <div className="stock-change">+0.8%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockMarket;
