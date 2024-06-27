import React, { useState } from "react";
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const { setUser } = useUser(); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      localStorage.setItem('userToken', response.data.token);
      console.log(response.data);
      
      setUser(response.data.user); 
      alert("Login successful");
      navigate('/components/home'); 
    } catch (error) {
      console.error('Login failed', error);
      alert("No user found... Signup to continue");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        password,
      });

      if (response.data.message === 'User already exists') {
        alert('User already exists');
      } else {
        alert('Registration successful. Redirecting to home page.');
        setUser(response.data); 
        navigate('/components/home');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="login-container"> 
      <div className="login-page">
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
        {signup ? (
          <>
            <button onClick={handleSignup}>Sign Up</button>
            <p onClick={() => setSignup(false)}>Already have an account? Log in</p>
          </>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <p onClick={() => setSignup(true)}>Don't have an account? <u>Sign up</u></p>
          </>
        )}
      </div>
    </div>  
  );
};

export default Login;
