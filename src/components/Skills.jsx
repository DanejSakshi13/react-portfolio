import React from "react";
import "./Skills.css";
import { Col, Row } from "antd";
import cpplogo from "../images/cpp_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faFigma, faHtml5, faJs, faNode, faNodeJs, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import mongoDb from "../images/mongodb.png"
import postgresql from "../images/postgresql.jpg";
import postman from "../images/postman.png";

export default function Skills() {

    return (
        <div className="skill-section">
            <h1 className="skills-heading">what i'm good at</h1>

            <h5 className="skill-sections">Programming language</h5>
            <Row className="skill-row">
                <div className="skill">
                    <img src={cpplogo} alt="" className="skill-logo" />
                    <div className="skill-name">C/C++</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faJs} className="skill-logo" />
                    <div className="skill-name">JavaScript</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} className="skill-logo" />
                    <div className="skill-name">python</div>
                </div>
            </Row>

            <h5 className="skill-sections">Frontend Technologies</h5>
            <Row className="skill-row">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} className="skill-logo" />
                    <div className="skill-name">ReactJS</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faCss3Alt} className="skill-logo" />
                    <div className="skill-name">CSS</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} className="skill-logo" />
                    <div className="skill-name">HTML</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faBootstrap} className="skill-logo" />
                    <div className="skill-name">Bootstrap</div>
                </div>
            </Row>

            <h5 className="skill-sections">Backend Technologies</h5>
            <Row className="skill-row">
                <div className="skill">
                    <FontAwesomeIcon icon={faNode} className="skill-logo" />
                    <div className="skill-name">NodeJS</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} className="skill-logo" />
                    <div className="skill-name">ExpressJS</div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPhp} className="skill-logo" />
                    <div className="skill-name">php</div>
                </div>
            </Row>

            <h5 className="skill-sections">Databases</h5>
            <Row className="skill-row">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} className="skill-logo" />
                    <div className="skill-name">mySQL</div>

                </div>
                <div className="skill">
                    <img src={mongoDb} alt="" srcset="" className="skill-logo" />
                    <div className="skill-name">MongoDB</div>
                </div>
                <div className="skill">
                    <img src={postgresql} alt="" className="skill-logo" />
                    <div className="skill-name">postgreSQL</div>
                </div>
            </Row>

            <h5 className="skill-sections">Tools</h5>
            <Row className="skill-row">
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} className="skill-logo"/>
                    <div className="skill-name">Figma</div>
                </div>
                <div className="skill">
                    <img src={postman} alt="" className="skill-logo" />
                    <div className="skill-name">Postman</div>
                </div>
            </Row>
        </div>
    );
}












