import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "./Login.css";
import logo from "../../../media/logo.png";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter the credentials')
    }
    console.log("login clicked", email, password);
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    if (sessionStorage.token) {
      navigate('/admin/MyProfile')
    }
  })

  return (
    <div>
      <h2
        style={{ margin: "2rem auto 0rem" }}
        className="text-center mb-4 text-primary"
      >
        {" "}
        Staff Login
      </h2>
      <div class="vh-100 d-flex justify-content-center align-items-start ">
        <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          {/* put the logo of the company here */}
          <div
            style={{
              display: "flex",
              height: "110px",
              width: "110px",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem auto",
              padding: "1rem",
              background: "black",
              borderRadius: "50%",
            }}
          >
            <img src={logo} alt="company blue whistle"></img>
          </div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control border border-primary"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control border border-primary"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="d-grid">
              <button
                style={{ margin: "2rem auto" }}
                class="btn btn-primary"
                type="submit"
                onClick={(e) => onLogin(e)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
