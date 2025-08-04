import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUsers();
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

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Admin Dashboard</h1>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Foydalanuvchilar</h2>
            <div className="btns flex gap-2.5">
              <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/article')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              Maqolalar
            </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border">T/r</th>
                  <th className="px-4 py-3 border">FullName</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Status</th>
                  <th className="px-4 py-3 border">Role</th>
                  <th className="px-4 py-3 border">Vaqt</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr
                    key={user.id}
                    className={`${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-2 border">{i + 1}</td>
                    <td className="px-4 py-2 border">{user.fullName ?? 'None'}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className={`px-4 py-2 border ${user.status === 'PENDING' ? 'bg-orange-500' : 'bg-emerald-500'}`}>{user.status}</td>
                    <td className="px-4 py-2 border">{user.roles}</td>
                    <td className="px-4 py-2 border">{user.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
