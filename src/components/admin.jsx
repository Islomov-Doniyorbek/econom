import React, { useEffect, useState } from 'react';
import './admin.css'
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUsers();
    fetchArticles();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://economily-production.up.railway.app/api/v1/user/list', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data?.data || []);
      console.log(data);
      
    } catch (err) {
      console.error('Users fetch error:', err);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await fetch('https://economily-production.up.railway.app/api/v1/article/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setArticles(data?.data || []);
      console.log(data);
      
    } catch (err) {
      console.error('Articles fetch error:', err);
    }
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://economily-production.up.railway.app/api/v1/article/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Maqola yaratildi!');
        fetchArticles();
        setTitle('');
        setContent('');
      } else {
        setMessage(data?.message || 'Xatolik');
      }
    } catch (err) {
      console.error('Create article error:', err);
    }
  };

  const handleDeleteArticle = async (id) => {
    if (!window.confirm('Haqiqatan o‘chirmoqchimisiz?')) return;
    try {
      const res = await fetch('https://economily-production.up.railway.app/api/v1/article/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        fetchArticles();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };
  console.log(articles);
  
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="users-section">
        <h2>Foydalanuvchilar</h2>
        <ul>
          {
            articles.map(item=>{
              return <h1>{item}</h1>
            })
          }
        </ul>
        <table>
          <thead>
            <tr>
              <th>T/r</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
                 <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>
                    {user.fullName === null ? "None" : user.fullName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>{user.roles}</td>
                </tr>
              
            ))}
           
          </tbody>
        </table>
      </section>

      <section className="articles-section">
        <h2>Maqolalar</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <strong>{article.title}</strong>
              <p>{article.content}</p>
              <button onClick={() => handleDeleteArticle(article.id)}>O'chirish</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleAddArticle} className="add-article-form">
          <h3>Yangi maqola qo‘shish</h3>
          <input
            type="text"
            placeholder="Sarlavha"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Kontent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <button type="submit">Qo‘shish</button>
        </form>
        {message && <p className="msg">{message}</p>}
      </section>
    </div>
  );
};

export default AdminDashboard;
