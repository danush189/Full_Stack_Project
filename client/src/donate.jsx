import './Styles.css'
import React from "react";

function Donate() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles.css" />
          <title>Donate now page</title>
          <style dangerouslySetInnerHTML={{__html: "\n    body  {\n        margin: 0%;}\n  /* Container for the image and text */\n  .container {\n    position: relative;\n    width:100%;\n  }\n\n  /* Dark overlay */\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */\n  }\n\n  /* Text style */\n  .text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n  }\n\n \n .container> img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n" }} />
          <div className="header">
            <img src="logos/logo_main.png" alt="loading" id="logo" />
            <a href="index.html">
              <img src="logos/home.png" alt="loading" id="homebutton" />
            </a>
          </div>
          <div id="volunteer-link" className="donate">
            <p>Help out by donating!    Click here to donate-&gt;</p>
            <a href="Shelters.html"><img src="logos/donate.png" alt="loading" id="donatebutton" /></a>
          </div>
          <div className="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQV3gWj3M_hl27C1f8rLwvlU6E7QVEM-wpA&usqp=CAU" alt="Your Image" />
            <div className="overlay" />
            <div className="text">Donate Now</div>
          </div>
        </div>
      );
    }
export default Donate;