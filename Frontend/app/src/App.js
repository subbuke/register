
import { useState } from "react";
import "./Auth.css";
import axios from 'axios';


export default function Register({ toggle }) {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://automatic-goldfish-wr7gwgxxj7qvcg66x-5000.app.github.dev/register',{name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div className="auth-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={toggle} className="toggle-link">Login</span>
      </p>
    </div>
  );
}


