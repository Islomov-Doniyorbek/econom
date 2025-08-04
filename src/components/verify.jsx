// src/pages/Verify.jsx
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";

const Verify = () => {
  const { verify } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verify(email, code);
      alert("Verified successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
    <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"  onSubmit={handleVerify}>
      <h2 className="text-2xl font-bold text-center text-blue-700">Verify Email</h2>
      <input className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Code" required onChange={(e) => setCode(e.target.value)} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"  type="submit">Verify</button>
    </form>

    </div>
  );
};

export default Verify;
