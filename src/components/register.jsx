// src/pages/Register.jsx
import { useState, useContext } from "react";
import AuthContext from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(fullname,email, password);
      navigate("/verify", { state: { email } });
    } catch (err) {
      alert(err.message); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
    <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6" onSubmit={handleRegister}>
      <h2 className="text-2xl font-bold text-center text-blue-700">Register</h2>
      <input 
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="FullName" required onChange={(e) => setFullName(e.target.value)} />
      <input 
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input 
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200" type="submit">Register</button>
      <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
    </form>

    </div>
  );
};

export default Register;
