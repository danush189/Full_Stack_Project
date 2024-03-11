import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.css'
import React from "react";

function Adopt() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Adopt page</title>
          <link rel="stylesheet" href="Styles.css" />
          <style dangerouslySetInnerHTML={{__html: "\n    .container {\n      position: relative;\n      width:100%;\n    }\n\n    .overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n\n    }\n  \n    .t1 {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      color: rgb(73, 20, 97);\n      text-align: center;\n    }\n  \n   \n   .container> img {\n      width: 100%;\n      height: auto;\n      display: block;\n    }\n    .container>.t1{\n      font-size: 3rem;\n    }\n    .cutie>img{\n      width: 100vw;\n      height: auto;\n    }\n" }} />
          <div className="header">
            <img src="../logos/logo_main.png" alt="loading" id="logo" />
            <a href="index.html"> 
              <img src="../logos/home.png" alt="loading" id="homebutton" />
            </a>
          </div>
          <div className="navbar">
            <div className="adopt-dropdown" id="adopt-dropdown">
              Adopt
              <div className="adopt-dropdown-content">
                <a href="Shelters.html"><img src="../logos/dog.png" alt="loading" id="donatebutton" />Dogs</a>
                <a href="Shelters.html"><img src="../logos/cat.png" alt="loading" id="donatebutton" />Cats</a>
                <a href="Shelters.html"><img src="../logos/other.png" alt="loading" id="donatebutton" />Other</a>
              </div>
            </div>
            <div className="searching">
              <p style={{marginRight: '10px'}}>Search</p>
              <div className="search-bar">
                <input type="text" id="search-input" placeholder="Search for a pet" />
                <button type="submit" style={{backgroundColor: 'aliceblue', width: '20px', margin: '0%', padding: '0%'}}>
                  <img src="logos/search.png" className="search-logo" id="search-logo" alt="Search" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <img src="../images/bgadopt.jpg" alt="Your Image" />
            <div className="overlay" />
            <div className="t1"><h1>Adoption Process</h1><br />
              Research: Begin by researching different types of pets to find one that suits your lifestyle. Consider factors like size, temperament, and activity level to ensure a good match.
              <br /><br /><br />Visit Shelters: Visit local animal shelters or rescue organizations to meet pets available for adoption. Spend time interacting with them to see which one you connect with best.
              <br /><br /><br />Once you've found a pet you're interested in, inquire about the adoption process. This typically involves filling out an application, meeting with adoption counselors, and possibly undergoing a home visit to ensure the pet's safety and well-being.
            </div>
          </div>
          <div className="cutie">
            <img src="../images/adoptimage.png" alt="ahhaa" />
          </div>
          <div id="volunteer-link">
            <p><a href="#logo">ADOPT A BUDDY TODAY!</a></p>
          </div>
        </div>
      );
    }
export default Adopt;