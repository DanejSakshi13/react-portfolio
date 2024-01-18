import { Row ,Col} from "antd";
import React from "react";
import "./About.css";
import Profile from "../images/profile.png";

export default function About() {
    return(
    <Row className="background">
        <Col span={14}>
       
    <div className="white-card">
        <h1 className="about-me">about me</h1>
        <p className="tagline">I'm a full stack web developer and a web designer. </p>
        <p className="desc"> I bring digital experiences to life through 
                                <span className="highlight rainbow-highlight"> creativity </span> and
                                <span className="highlight rainbow-highlight"> code</span> .
                                <br />  Beyond development, I'm an avid artist. I'm driven to explore new ideas, constantly pushing 
                              boundaries with a sense of curiosity and dedication.
                               <br /> Welcome to my portfolio, where the fusion of technology and art defines my path.</p>               
    </div>
    </Col>
    <Col span={10}>
        <img src={Profile} alt="" className="profile-img"/>
         </Col>
    </Row>
      
      

    );
};
