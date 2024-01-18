import { Col, Row } from "antd";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Home.css";
// import CustomCursor from "./CustomCursor";
import flowColors from "../images/colorsFlowing.png";
import NavbarComponent from "./Navbar";

export default function Home() {
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

  return (
    <div className="home-section">
      <NavbarComponent />
      <Row className="main-row">
        <Col span={12}>
          <h1 className="developer">{"<developer>"}</h1>
          <div className="code-box-intro">
            <pre>{htmlCode}</pre>
          </div>
        </Col>
        <Col span={12}>       
        <h1 className="designer">designer</h1>
        </Col>
      </Row>
    </div>
  );
}



























