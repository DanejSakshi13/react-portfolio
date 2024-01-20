import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import CustomCursor from "./CustomCursor";
import flowColors from "../images/colorsFlowing.png";
import NavbarComponent from "./Navbar";
import food from "../images/food.png";
import fintech from "../images/fintech.png";

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

        <Carousel 
        className="carousel-section"
      showStatus={false} 
      infiniteLoop={true} 
      autoPlay={true}
      showThumbs={false}
      showArrows={false} 

        
        >
                <div>
                    <img src={food} alt="foodimg"/>
                </div>
                <div>
                <img src={fintech} alt="foodimg"/>
                </div>
            </Carousel>
        
        </Col>
      </Row>
    </div>
  );
}



























