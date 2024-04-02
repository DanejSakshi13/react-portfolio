import React from "react";
import NavbarComponent from "./Navbar";
import "./Home.css";
import bgVideo from "../images/bgvideo.mp4";

export default function Home() {
  return (
    <div className="home-section">
    <NavbarComponent />
   
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={bgVideo} type="video/mp4" className="main-video"/>
        </video>
      </div>
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









