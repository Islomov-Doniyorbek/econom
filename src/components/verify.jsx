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
    <form onSubmit={handleVerify}>
      <h2>Verify Email</h2>
      <input type="text" placeholder="Enter Code" required onChange={(e) => setCode(e.target.value)} />
      <button type="submit">Verify</button>
    </form>
  );
};

export default Verify;
