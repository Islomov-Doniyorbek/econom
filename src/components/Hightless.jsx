import React from 'react';
import '../index.css'

const NationalHighlights = () => {
  return (
    <section className="container">
      <h2 className="section-title">National Highlights</h2>
      <div className="highlights">
        <div className="main-highlight">
          <img
            src="https://images.unsplash.com/photo-1593692909682-f5b0b436a9b0?auto=format&fit=crop&w=1200"
            alt="Tourism"
            className="main-highlight-img"
          />
          <div className="main-highlight-content">
            <span className="news-category">Tourism</span>
            <h3 className="news-title">Uzbekistan Sees 40% Increase in Tourist Arrivals</h3>
            <p className="news-excerpt">
              Historic cities along the Silk Road continue to attract visitors from around the world, with tourism becoming a major economic driver for the country.
            </p>
            <a href="#" className="btn">Read Full Story</a>
          </div>
        </div>

        <div className="side-highlights">
          <div className="side-card">
            <img
              src="https://images.unsplash.com/photo-1511892542-295cd838dd58?auto=format&fit=crop&w=400"
              alt="Transport"
              className="side-card-img"
            />
            <div className="side-card-content">
              <h3 className="news-title">New High-Speed Rail Connects Tashkent and Bukhara</h3>
              <div className="news-meta">
                <span>July 9, 2025</span>
                <span>3 min read</span>
              </div>
            </div>
          </div>

          <div className="side-card">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400"
              alt="Environment"
              className="side-card-img"
            />
            <div className="side-card-content">
              <h3 className="news-title">Government Announces Major Reforestation Initiative</h3>
              <div className="news-meta">
                <span>July 8, 2025</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>

          <div className="side-card">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400"
              alt="Nature"
              className="side-card-img"
            />
            <div className="side-card-content">
              <h3 className="news-title">New National Park Established in Fergana Valley</h3>
              <div className="news-meta">
                <span>July 7, 2025</span>
                <span>2 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalHighlights;
