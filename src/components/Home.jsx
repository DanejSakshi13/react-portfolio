import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import CustomCursor from "./CustomCursor";
import flowColors from "../images/colorsFlowing.png";
import NavbarComponent from "./Navbar";
import mobileui from "../images/mobileui.png";
import imacui from "../images/imac.png";

export default function Home() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [imacColSpan, setImacColSpan] = useState(24);
  const [mobileColSpan, setMobileColSpan] = useState(0);

  useEffect(() => {
    // Display the mobile UI and designer heading after a delay
    const timeout = setTimeout(() => {
      setIsDisplayed(true);
      setImacColSpan(12);
      setMobileColSpan(12);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home-section ${isDisplayed ? 'shifted' : ''}`}>
      <NavbarComponent />
      <Row className="main-row">
        <Col span={imacColSpan} className="imac-col">
          <div className={`imac-container ${isDisplayed ? 'small' : ''}`}>
            <h1 className="developer">{"<developer>"}</h1>
            <img src={imacui} alt="" className="imacui" />
          </div>
        </Col>
        {isDisplayed && (
          <Col span={mobileColSpan} className="mobile-col">
            <div className="mobile-container">
              <img src={mobileui} alt="" className="mobile" />
              <h1 className="designer">designer</h1>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}


























/* 

 const initialHtmlCode = `
    <html>
      <body>
        <div class="myName">
            <h1> SAKSHI GANESH DANEJ </h1>
        </div>
        <div class="welcome-msg">
        Merging Creativity and Technology
        </div>
        <div class="welcome-msg">
            WELCOME TO MY PORTFOLIO!
        </div>
      </body>
    </html>
  `;



useEffect(() => {
  setTimeout(() => {
    setShowMobile(true);
  }, 3000); // Adjust the delay based on your preference
}, []);
const [htmlCode, setHtmlCode] = useState('');

const runTypewriter = () => {
  const text = initialHtmlCode.trim();
  let index = 0;

  const interval = setInterval(() => {
    setHtmlCode(text.slice(0, index));
    index++;

    if (index > text.length) {
      clearInterval(interval);
      // Reset the typewriter effect
      setTimeout(() => {
        setHtmlCode('');
        runTypewriter();
      }, 1000); // Adjust the delay based on your preference
    }
  }, 35);
};

useEffect(() => {
  runTypewriter();
}, []); // Run the typewriter effect on mount



*/









