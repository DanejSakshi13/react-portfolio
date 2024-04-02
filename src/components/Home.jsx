import { Col, Row } from "antd";
import React from "react";
import "./Home.css";
// import CustomCursor from "./CustomCursor";
import NavbarComponent from "./Navbar";
import mobileui from "../images/mobileui.png";
import imacui from "../images/imac.png";

export default function Home() {


  return (
    <div className="home-section">
      <NavbarComponent />
      <Row className="main-row">
        <Col span={16} className="imac-col">

          <h1 className="developer">{"<developer>"}</h1>

          <div className="mac-div">
            <img src={imacui} alt="" className="imacui" />
          </div>

        </Col>

        <Col span={6} className="mobile-col">
          <div className="mob-div">
            <img src={mobileui} alt="" className="mobile" />
          </div>
          <h1 className="designer">designer</h1>
        </Col>

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









