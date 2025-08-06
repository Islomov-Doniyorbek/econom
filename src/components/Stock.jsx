import React, { useEffect, useState } from 'react';
import '../index.css';

const StockMarket = () => {
  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA"]; // 6 ta
  const API_KEY = "1b54e1f38ca545c09216b7945582ac2b";
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const results = [];

      for (let symbol of symbols) {
        try {
          const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${API_KEY}`);
          const data = await res.json();
          const series = data['Weekly Time Series'];
          console.log(data);
          
          if (!series) continue;

          const dates = Object.keys(series);
          const latestDate = dates[0];
          const prevDate = dates[1];

          const latestClose = parseFloat(series[latestDate]['4. close']);
          const prevClose = parseFloat(series[prevDate]['4. close']);
          const average = (parseFloat(series[latestDate]['2. high']) + parseFloat(series[latestDate]['3. low'])) / 2;
          const change = latestClose - prevClose;
          const percent = ((change) / prevClose) * 100;

          results.push({
            symbol,
            date: latestDate,
            average: average.toFixed(2),
            change: change.toFixed(2),
            percent: percent.toFixed(2),
          });

        } catch (err) {
          console.error(`Error fetching ${symbol}:`, err);
        }
      }

      setStocks(results);
    };

    fetchAll();
  }, []);
  console.log(stocks);
  

  return (
    <section id="stock-market" className="container">
      <div className="stock-section">
        <div className="section-header">
          <h2>International Stock Market</h2>
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
          {stocks.map((stock, i) => {
            return (
              <div key={i} className={`stock-card ${stock.change < 0 ? 'negative' : ''}`}>
              <div className="stock-name">{stock.symbol}</div>
              <div className="stock-symbol">{stock.date}</div>
              <div className="stock-price">${stock.average}</div>
              <div className="stock-change">
                {stock.change > 0 ? '+' : ''}
                {stock.change} ({stock.percent}%)
              </div>
            </div>
            )
          })}

         

        </div>
      </div>
    </section>
  );
};

export default StockMarket;
