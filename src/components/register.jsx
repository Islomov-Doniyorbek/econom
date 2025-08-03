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
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="FullName" required onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
      <p onClick={() => navigate("/login")}>Already have an account?</p>
    </form>
  );
};

export default Register;
