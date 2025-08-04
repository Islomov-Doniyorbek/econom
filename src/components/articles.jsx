'use client';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const API = 'https://economily-production.up.railway.app/api/v1/article';

  const fetchArticles = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setArticles(data.data || []);
  };
//   setArticles(articles.reverse())

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">Articles</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-1 italic">{article.subtitle}</p>
              <p className="text-gray-700 mt-3">
                {article.text.length > 150 ? article.text.slice(0, 150) + '...' : article.text}
              </p>
              <Link to={`/article/${article.id}`}>Batafsil</Link>
            </div>
          ))}
        </div>

        {articles.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No articles available at the moment.</p>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Articles;
