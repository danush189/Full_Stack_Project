import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Indexpage from './Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
          <link rel="stylesheet" href="styleshome.css" />
          <title>AdoptABuddy</title>
          <div className="header">
            <img src="images/Logoprop.png" alt="loding" id="logo" />
          </div>
          <div className="nav">
            <ul id="nav1">
              <li><a href="adopt.html">Adopt</a></li>
              <li><a href="donatenow.html">Donate</a></li>
              <li><a href="Shelters.html">Shelters</a></li>
            </ul>
            <ul id="navend">
              <li><a href="Signup.html">Sign Up</a></li>
              <li><a href="Login.html">Login</a></li>
            </ul>
          </div>
          <div className="section1">
            <img src="images/dogHeader.png" alt="loading image" id="dogHeader" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#36157C" fillOpacity={1} d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
            </svg>
            {/* <div class="section3"></div> */}
            {/* </div> */}
          </div>
          <div className="section3">
            <div className="adopt1">
              <p id="num1">84</p>
              <p id="text1">ANIMALS</p>
            </div>
            <div className="adopt2">
              <p id="num2">22</p>
              <p id="text2">SPECIES</p>
            </div>
            <div className="adopt3">
              <p id="num3">193</p>
              <p id="text3">DONATIONS</p>
            </div>
            <div className="adopt4">
              <p id="num4">35</p>
              <p id="text4">ADOPTIONS</p>
            </div>
            <div className="adopt5">
              <p id="num5">101</p>
              <p id="text5">VOLUNTEERS</p>
            </div>
          </div>
          <div className="carouselBox">
            <center><div className="boxheading"><h1>Happy Pets!</h1></div></center>
            <div className="carousel">
              <div className="carousel-item">
                <img src="images/corousel1.jpg" alt="loading..." id="carousel1" />
              </div>
              <div className="carousel-item">
                <img src="images/cat1.jpg" alt="loading..." id="carousel1" />
              </div>
              <div className="carousel-item">
                <img src="images/dog5.jpg" alt="loading..." id="carousel1" />
              </div>
              <div className="carousel-item">
                <img src="images/bird1.jpg" alt="loading..." id="carousel1" />
              </div>
              <div className="carousel-item">
                <img src="images/dog3.jpg" alt="loading..." id="carousel1" />
              </div>
            </div>
          </div>
          <div className="process">
            <div className="feature">FEATURES OF ADOPTABUDDY</div> 
            <div className="container">
              <div className="card">
                <h3>VACCINATED PETS</h3>
                <p>FEATURES OF ADOPTABUDDY.</p>
              </div>
              <div className="card">
                <h3>TRUSTED SHELTERS</h3>
                <p>FEATURES OF ADOPTABUDDY.</p>
              </div>
              <div className="card">
                <h3>FEATURE 1</h3>
                <p>FEATURES OF ADOPTABUDDY.</p>
              </div>
              <div className="card">
                <h3>FEATURE 1</h3>
                <p>FEATURES OF ADOPTABUDDY.</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer1">
              <ul>
                <li>Collaborations</li>
                <li>Activities</li>
                <li>About us </li>
                <li>Achievements</li>
              </ul>
            </div>
            <div className="footer2">
              <ul>
                <li>Blogs</li>
                <li>FAQs</li>
                <li>About us </li>
                <li>Shelter Info</li>
              </ul>
            </div>
            <div className="footer3">
              <p>CONTACT US</p>
              <a href="https://wa.me/7022215512"><img src="images/footerLogo.png" alt="loading..." id="footer-img" /></a>
            </div>
          </div>
        </div>
  )
}

export default App
