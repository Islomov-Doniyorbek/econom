import React, { useEffect, useState } from 'react';
import '../index.css';

const StockMarket = () => {
  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA"];
  const API_KEY = "1b54e1f38ca545c09216b7945582ac2b";
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const results = [];

      for (let symbol of symbols) {
        try {
          const url = `https://api.twelvedata.com/time_series?apikey=${API_KEY}&interval=1min&symbol=${symbol}&type=stock`;
          const res = await fetch(url);
          const data = await res.json();
          console.log(data); // debugging

          if (!data || !data.values || data.values.length < 2) continue;

          const latest = data.values[0];
          const previous = data.values[1];

          const latestClose = parseFloat(latest.close);
          const prevClose = parseFloat(previous.close);
          const average = (parseFloat(latest.high) + parseFloat(latest.low)) / 2;
          const change = latestClose - prevClose;
          const percent = (change / prevClose) * 100;

          results.push({
            symbol,
            date: latest.datetime.split(" ")[0],
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
    setInterval(fetchAll(), 5 * 60 * 1000); // 5 daqiqada 1 marta

    // fetchAll();
  }, []);

  return (
    <section id="stock-market" className="container">
      <div className="stock-section">
        <div className="section-header">
          <h2>International Stock Market</h2>
          {/* <a href="#" className="view-all">View All Stocks <i className="fas fa-arrow-right"></i></a> */}
        </div>

        <div className="stock-grid">
          {stocks.map((stock, i) => (
            <div key={i} className={`stock-card ${stock.change < 0 ? 'negative' : ''}`}>
              <div className="stock-name">{stock.symbol}</div>
              <div className="stock-symbol">{stock.date}</div>
              <div className={`stock-price ${stock.change < 0 ? 'negative' : 'positive'}`}>${stock.average}</div>
              <div className={`stock-change ${stock.change < 0 ? 'negative' : 'positive'}`}>
                {stock.change > 0 ? '+' : ''}
                {stock.change} ({stock.percent}%)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockMarket;
