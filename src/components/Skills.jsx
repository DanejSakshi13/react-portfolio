import React from "react";
import "./Skills.css";
import { Col, Row } from "antd";
import cpplogo from "../images/cpp_logo.png"

export default function Skills() {

    return (
        <div className="skill-section">
            <h1 className="skills-heading">what i'm good at</h1>
            
            <h5 className="skill-sections">Programming language</h5>
            <Row className="skill-row">
                <div className="skill">
                    <img src={cpplogo} alt="" className="skill-logo"/>
                    C++ 
                </div>
                <div className="skill">Javascript</div>
                <div className="skill">Python</div>
            </Row>

            <h5 className="skill-sections">Frontend Technologies</h5>
            <Row className="skill-row">
                <div className="skill">ReactJS</div>
                <div className="skill">CSS</div>
                <div className="skill">HTML</div>
                <div className="skill">Javascript</div>
                <div className="skill">Bootstrap</div>
            </Row>

            <h5 className="skill-sections">Backend Technologies</h5>
            <Row className="skill-row">
                <div className="skill">NodeJS</div>
                <div className="skill">ExpressJS</div>
                <div className="skill">Flask</div>
                <div className="skill">Javascript</div>
                <div className="skill">PHP</div>
            </Row>

            <h5 className="skill-sections">Databases</h5>
            <Row className="skill-row">
                <div className="skill">mySQL</div>
                <div className="skill">MongoDB</div>
                <div className="skill">postgreSQL</div>
            </Row>

            <h5 className="skill-sections">Tools</h5>
            <Row className="skill-row">
                <div className="skill">Figma</div>
                <div className="skill">Postman</div>
            </Row>
        </div>
    );
}












