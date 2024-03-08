import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-signin-client_id" content="161130820610-slg9iun5tedjvjdugbnm55kbgl97p1hj.apps.googleusercontent.com" />
        <title>Signup</title>
        <link rel="stylesheet" href="styles2.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <video autoPlay muted loop id="myVideo">
          <source src="imgvd/dog1.mp4" type="video/mp4" />
        </video>
        <div className="header">
          <img src="../logos/logo_main.png" alt="loading" id="logo" />
          <a href="index.html">
            <img src="../logos/home.png" alt="loading" id="homebutton" />
          </a>
        </div>
        <div className="body">
          <div className="main-box">
            <form>
              <h1 style={{fontFamily: 'Marykate', fontWeight: 400}}>Be a part of our family by signing up</h1>
              <div className="input-box">
                <input type="text" name="fname" id="fname" placeholder="Full Name" required />
                <i className="bx bxs-user" />
              </div>
              <div className="input-box">
                <input type="text" name="username" id="username" placeholder="Username" required />
                <i className="bx bxs-user" />
              </div>        
              <div className="input-box">
                <input type="password" name="password" id="password" placeholder="Password" required />
                <i className="bx bxs-lock-alt" />
              </div>
              <center>
                <button type="submit">Signup</button>
                <div className="gsign"><div className="g-signin2" data-onsuccess="onSignIn" /></div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
