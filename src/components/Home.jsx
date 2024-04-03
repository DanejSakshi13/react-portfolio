import React from "react";
import NavbarComponent from "./Navbar";
import "./Home.css";
import { Col, Row } from "antd";
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import macBook from "../images/macBook.png";
import homeScreenPopGif from "../images/Code typing.gif";

export default function Home() {
  
  return (
    <div className="home-section">
      <NavbarComponent />
      <Row>
        <Col xs={24} sm={12}>
          <h1 className="my-name">sakshi ganesh danej</h1>
          <h4 className="desc">fullstack web developer</h4>
          <div className="socials">
            <div className="round-button"><a href="https://www.linkedin.com/in/sakshi-danej/"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a></div>
            <div className="round-button"><a href="https://twitter.com/SakshiDanej"><FontAwesomeIcon icon={faXTwitter} className="icon"/></a></div>
            <div className="round-button"><a href="https://github.com/DanejSakshi13"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="img-div">
            <img src={homeScreenPopGif} alt="Code Typing GIF" className="typing-gif" />
          </div>
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








