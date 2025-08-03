import React from 'react';
import '../index.css';

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Uzbekistan Daily News</h1>
          <p className="hero-subtitle">Your trusted source for the latest news, analysis, and insights from across Uzbekistan</p>
          <a href="#latest-news" className="btn">Explore Latest News</a>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container" id="latest-news">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {/* News Card 1 */}
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600" alt="Tashkent City" className="news-img" />
            <div className="news-content">
              <span className="news-category">Politics</span>
              <h3 className="news-title">President Announces New Economic Reforms</h3>
              <p className="news-excerpt">New economic policies aim to boost foreign investment and improve business climate across Uzbekistan.</p>
              <div className="news-meta">
                <span>July 12, 2025</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
          {/* News Card 2 */}
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600" alt="Agriculture" className="news-img" />
            <div className="news-content">
              <span className="news-category">Agriculture</span>
              <h3 className="news-title">Record Cotton Harvest Expected This Season</h3>
              <p className="news-excerpt">Favorable weather conditions and modern farming techniques contribute to a projected bumper crop.</p>
              <div className="news-meta">
                <span>July 11, 2025</span>
                <span>3 min read</span>
              </div>
            </div>
          </div>
          {/* News Card 3 */}
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600" alt="Education" className="news-img" />
            <div className="news-content">
              <span className="news-category">Education</span>
              <h3 className="news-title">New University Opens in Samarkand</h3>
              <p className="news-excerpt">The state-of-the-art institution will focus on technology and cultural studies, attracting students from across Central Asia.</p>
              <div className="news-meta">
                <span>July 10, 2025</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
