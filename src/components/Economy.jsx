import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Economy = () => {
  const API = 'https://economily-production.up.railway.app/api/v1/article';

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API}/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setArticles(data.data || []);
  };

  useEffect(()=>{
    fetchArticles();
  },[])
  const blogs = articles.reverse().slice(-3)
  return (
    <section className="container" id="economic-articles">
      <h2 className="section-title">Economic Articles <Link to={"/articles"}>Blogs</Link></h2>

      <div className="news-grid">
        {
          blogs.map(item=>{
            return (
              <div className="news-card">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600"
                  alt="Economic Growth"
                  className="news-img"
                />
                <div className="news-content">
                  <span className="news-category">{item.topic}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">
                    {item.text.slice(0, 60)}...
                  </p>
                  <Link to={`/article/${item.id}`}>Batafsil</Link>
                  <div className="news-meta">
                    <span>July 14, 2025</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Economy;
