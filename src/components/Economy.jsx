import React from 'react';
import '../index.css';

const Economy = () => {
  return (
    <section className="container" id="economic-articles">
      <h2 className="section-title">Economic Articles</h2>

      <div className="news-grid">
        {/* Economy Card 1 */}
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600"
            alt="Economic Growth"
            className="news-img"
          />
          <div className="news-content">
            <span className="news-category">Economy</span>
            <h3 className="news-title">Uzbekistan's GDP Grows 5.8% in Q2 2025</h3>
            <p className="news-excerpt">
              Strong performance in manufacturing and services sectors drive economic expansion despite global challenges.
            </p>
            <div className="news-meta">
              <span>July 14, 2025</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>

        {/* Economy Card 2 */}
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600"
            alt="Agriculture"
            className="news-img"
          />
          <div className="news-content">
            <span className="news-category">Agriculture</span>
            <h3 className="news-title">New Agricultural Export Strategy Unveiled</h3>
            <p className="news-excerpt">
              Government plans to increase fruit and vegetable exports by 35% through new trade agreements and logistics improvements.
            </p>
            <div className="news-meta">
              <span>July 13, 2025</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Economy Card 3 */}
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600"
            alt="Investment"
            className="news-img"
          />
          <div className="news-content">
            <span className="news-category">Investment</span>
            <h3 className="news-title">Foreign Direct Investment Hits Record $8.2 Billion</h3>
            <p className="news-excerpt">
              Energy and tech sectors attract the majority of foreign capital as Uzbekistan improves its investment climate.
            </p>
            <div className="news-meta">
              <span>July 12, 2025</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economy;
