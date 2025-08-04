'use client';
import React, { useEffect, useState } from 'react';

const AdminDashboard2 = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    text: '',
    topic: 'ECONOMICS',
  });
  const [editingId, setEditingId] = useState(null);

  const API = 'https://economily-production.up.railway.app/api/v1/article';

  const fetchArticles = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API}/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setArticles(data.data || []);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  const token = localStorage.getItem('token');

  const isUpdating = Boolean(editingId);
  const method = isUpdating ? 'PUT' : 'POST';
  const url = isUpdating
    ? `${API}/update?id=${editingId}`  // ID URLda query sifatida beriladi
    : `${API}/create`;

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  const result = await res.json();
  console.log("Server javobi:", result);

  if (res.ok) {
    fetchArticles();
    setFormData({ title: '', subtitle: '', text: '', topic: 'ECONOMICS' });
    setEditingId(null);
  } else {
    alert("Xatolik: " + (result.message || "Noma'lum xatolik"));
  }
};

  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      subtitle: article.subtitle,
      text: article.text,
      topic: article.topic,
    });
    setEditingId(article.id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API}/delete?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setArticles(prev => prev.filter(article => article.id !== id));
      } else {
        console.error("O‘chirishda xatolik:", await res.text());
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Article management</h2>

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">{editingId ? 'Update Article' : 'Create New Article'}</h3>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Subtitle"
            className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Text"
            rows={4}
            className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none resize-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="NEWS">NEWS</option>
            <option value="SCIENCE">SCIENCE</option>
            <option value="ECONOMICS">ECONOMICS</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            {editingId ? 'Update Article' : 'Create Article'}
          </button>
        </div>

        {/* Article list */}
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{article.subtitle}</p>
              <p className="mt-3 relative  text-gray-700">{article.text}</p>
              <p className="text-xs text-gray-400 mt-2 italic">Topic: {article.topic}</p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(article)}
                  className="text-sm px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-sm px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard2;
