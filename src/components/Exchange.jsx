import React, { useEffect, useState } from 'react';
import '../index.css';
import { FaDollarSign } from 'react-icons/fa';

const CurrencyExchange = () => {
  const [rates, setRates] = useState([]);

  const neededCodes = ['USD', 'RUB', 'TRY', 'KZT', 'EUR', 'CNY']; // kerakli valyutalar

  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const API = `https://cbu.uz/uz/arkhiv-kursov-valyut/json/all/${today}/`;
        const res = await fetch(API);
        const data = await res.json();

        // Faqat kerakli valyutalarni ajratib olamiz
        const filtered = data.filter((item) => neededCodes.includes(item.Ccy));
        setRates(filtered);
      } catch (err) {
        console.error('Valyuta olishda xatolik:', err);
      }
    };

    fetchRates();
    
  }, []);
  console.log(rates);

  return (
    <section className="container" id="currency-rates">
      <div className="currency-section">
        <div className="section-header">
          <h2>Currency Exchange Rates</h2>
          <span className="update-time">Updated: {today}</span>
        </div>

        <div className="currency-grid">
          {
            rates.map(item=>{
             return (
               <div key={item.id} className="currency-card">
                <div className="currency-flag">
                  <FaDollarSign/>
                </div>
                <div className="currency-info">
                  <div className="currency-name">{item.CcyNm_UZ}</div>
                  <div className="currency-code">({item.Ccy}):</div>
                </div>
                <div className="currency-rate">{item.Rate}</div>
                <div className={`currency-change ${parseFloat(item.Diff) > 0 ? 'positive' : 'negative'}`}>
                  {item.Diff}
                </div>
              </div>
             )

            })
          }
          {/* USD */}

          {/* EUR */}
      
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
