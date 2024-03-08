import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";

function Login(){
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login</title>
          <link rel="stylesheet" href="styles2.css" />
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
          <video autoPlay muted loop id="myVideo">
            <source src="imgvd/dog1.mp4" type="video/mp4" />
          </video>
          <div className="header">
            <img src="logos/logo_main.png" alt="loading" id="logo" />
            <a href="index.html">
              <img src="logos/home.png" alt="loading" id="homebutton" />
            </a>
          </div>
          <div className="body">
            <div className="main-box">
              <h1 style={{fontFamily: 'Marykate', fontWeight: 400}}>Welcome Back... Login</h1>
              <div className="input-box">
                <input type="text" name="username" id="username" placeholder="Username" required />
                <i className="bx bxs-user" />
              </div>
              <div className="input-box">
                <input type="password" name="password" id="password" placeholder="Password" required />
                <i className="bx bxs-lock-alt" />
              </div>
              <div className="remember-forgot">
                <label htmlFor="remember_me"><input type="checkbox" id="remember_me" />Remember me</label>
                <a href="#">Forgot Password?</a>
              </div>
              <center>
                <button type="submit">Login</button>
              </center>
              <div className="signup">
                <p>Dont have a account? <a href="Signup.html">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      );
    }
export  default Login;