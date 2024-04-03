import { Row, Col } from "antd";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./About.css";
import Profile from "../images/profile.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div className="about-me">
            <h1 className="about-me-heading">about me</h1>
            <Row className="outline-div">
                <Col span={7}>
                    <div className="avtaar"></div>
                </Col>
                <Col span={17}>
                    <div className="white-card"></div>
                </Col>
            </Row>
        </div>



    );
};





/* 

    const letterStyles = {
        M: { color: '#00ED64' },
        E: { color: 'white' },
        R: { color: '#61DAFB' },
        N: { color: '#8BC500' }
    };
<p className="desc welcome" style={{ color:'white', paddingLeft:'10px' }}> Welcome to my portfolio!</p>
                    <p className="tagline" style={{ display: 'inline' }}>
                    I'm a {' '}
                        <span style={letterStyles['M']}>M</span>
                        <span style={letterStyles['E']}>E</span>
                        <span style={letterStyles['R']}>R</span>
                        <span style={letterStyles['N']}>N</span>
                        {' '} stack developer and a web designer with a passion for bringing digital experiences to life
                    </p>
                    <p className="desc" style={{ display: 'inline', color:'white', fontSize:'1.4vw' }}>  through
                        <span className="highlight rainbow-highlight"> creativity </span> and
                        <span className="highlight rainbow-highlight"> code</span> .
                    </p>
                    */