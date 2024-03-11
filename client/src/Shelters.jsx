import './Styles.css'
import React from "react";

function Shelters() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Shelters</title>
          <link rel="stylesheet" href="styles.css" />
          <div className="header">
            <img src="logos/logo_main.png" alt="loading" id="logo" />
            <a href="index.html">
              <img src="logos/home.png" alt="loading" id="homebutton" />
            </a>
          </div>
          <div id="volunteer-link">
            <p><a href="#vol-form">VOLUNTEER AT A SHELTER NEAR YOU!</a></p>
          </div>
          <div className="carousel">
            <img src="images/shelter2.png" alt="loading" className="pic" />
            <img src="images/shelter 3.png" alt="loading" className="pic" />
            <img src="images/shelter1.png" alt="loading" className="pic" />
          </div>
          <div className="description">
            <p className="sh-name">LOVE FOR FORGOTTEN</p>
            <p className="sh-address">80 Feet Road, Royal County, 1st Phase,</p>
            <p className="sh-address">Kothnur,Karnataka 560083</p>
          </div>
          <div className="carousel">
            <img src="images/shelter1.png" alt="loading" className="pic" /> 
            <img src="images/shelter2.png" alt="loading" className="pic" />
            <img src="images/shelter 3.png" alt="loading" className="pic" />
          </div>
          <div className="description">
            <p className="sh-name">LOVE FOR FORGOTTEN</p>
            <p className="sh-address">80 Feet Road, Royal County, 1st Phase,</p>
            <p className="sh-address">Kothnur,Karnataka 560083</p>
          </div>
          <div className="carousel">
            <img src="images/shelter1.png" alt="loading" className="pic" />
            <img src="images/shelter2.png" alt="loading" className="pic" />
            <img src="images/shelter 3.png" alt="loading" className="pic" />
          </div>
          <div className="description">
            <p className="sh-name">LOVE FOR FORGOTTEN</p>
            <p className="sh-address">80 Feet Road, Royal County, 1st Phase,</p>
            <p className="sh-address">Kothnur,Karnataka 560083</p>
          </div>
          <div id="vol-form">
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label> 
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                <label htmlFor="lastName">Last Name:</label> 
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label> 
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <label htmlFor="contact">Contact:</label> 
                <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <select id="location" name="location">
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
                <label htmlFor="duration">Duration:</label>
                <select id="duration" name="duration">
                  <option value="1-week">1 Week</option>
                  <option value="2-weeks">2 Weeks</option>
                  <option value="1-month">1 Month</option>
                </select>
              </div>
              <center>
                <button type="submit">SIGN UP</button></center>
            </form>
          </div>
        </div>
      );
    }
export default Shelters;