import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); // Backend 0-dan boshlasa
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const limit = 10; // Sahifadagi elementlar soni

  const fetchUsers = async (page = 0, limit = 10) => {
    try {
      const url = new URL(
        "https://economily-production.up.railway.app/api/v1/user/list"
      );
      url.searchParams.append("page", page);
      url.searchParams.append("limit", limit);

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Foydalanuvchilarni olishda xatolik");
      }

      const data = await res.json();
      setUsers(data?.data || []);
      setTotalPages(data?.pages || 1);
    } catch (err) {
      console.error("Users fetch error:", err);
    }
  };

  useEffect(() => {
    fetchUsers(page, limit);
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Admin Dashboard
        </h1>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Foydalanuvchilar</h2>
            <div className="btns flex gap-2.5">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/article")}
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
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Vaqt</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr
                    key={user.id}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    {/* Indeksni to‘g‘ri hisoblash */}
                    <td className="px-4 py-2 border">{page * limit + i + 1}</td>
                    <td className="px-4 py-2 border">{user.fullName ?? "None"}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td
                      className={`px-4 py-2 border ${
                        user.status === "PENDING"
                          ? "bg-orange-500 text-white"
                          : "bg-emerald-500 text-white"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="px-4 py-2 border">{user.roles ?? "—"}</td>
                    <td className="px-4 py-2 border">
                      {new Date(user.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination tugmalari */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Oldingi
            </button>

            <span className="px-4 py-2">
              Sahifa {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Keyingi
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
