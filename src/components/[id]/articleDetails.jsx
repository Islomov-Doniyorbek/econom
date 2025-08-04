'use client';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState(null);
  const API = 'https://economily-production.up.railway.app/api/v1/article';

  useEffect(() => {
    const fetchArticle = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API}/get-by-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setArticle(data.data);
    };
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
    console.log(article);
    
    fetchArticle();
    fetchArticles();
}, [id]);

if (!article) {
    return <p className="text-center mt-10">Loading...</p>;
}

console.log(articles);
const othersNews = articles.slice(0, 3).reverse()
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Header />
      <section className="w-full mx-auto px-4 py-12">
        <div class="blog  rounded-2xl p-5">
            <h1 className="text-4xl font-bold border-b-2 border-zinc-400 py-1.5 text-indigo-800 mb-4">{article.title}</h1>
            <h2 className="text-xl italic text-gray-600 mb-6">{article.subtitle}</h2>
            <p className="text-gray-800 leading-relaxed">{article.text}</p>
        </div>
      </section>
      <section className='w-full mx-auto px-4 py-12'>
            <h1 className="text-2xl font-bold border-b-2 border-zinc-400 py-1.5 text-cyan-800 mb-4">Boshqa xabarlar</h1>
            <div class="blogs grid grid-cols-3 relative gap-3.5 p-10">
                {
                    othersNews.map(item=>{
                        return (
                        <div className="news-card">
                            <img
                            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600"
                            alt="Economic Growth"
                            className="news-img"
                            />
                            <div className="news-content">
                            <span className="news-category">{item.topic}</span>
                            <h3 className="news-title font-extrabold">{item.title}</h3>
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
      <Footer />
    </div>
  );
};

export default ArticleDetail;
