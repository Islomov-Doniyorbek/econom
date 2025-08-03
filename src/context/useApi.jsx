const BASE_URL = 'https://economily-production.up.railway.app/api/v1/auth';

export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/login-by-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  return data.data; // token
};

export const registerUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/register-by-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Registration failed');
  const data = await res.json();
  return data.data; // token
};

export const verifyToken = async (token) => {
  const res = await fetch(`${BASE_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error('Invalid token');
  return await res.json(); // returns user data or success info
};
