import React from "react";
import "./Skills.css";
import { Col, Row } from "antd";
import cpplogo from "../images/cpp_logo.png"

export default function Skills() {

    return (
        <div className="main-section">
            <h1 className="skills-heading">what i'm good at</h1>
            <Row className="web-diagram">
                <Col className="col" xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Row><h1 className="what-skill prog-lang">Programming languages</h1></Row>
                    <Row >
                        <Col className="skill html"><p>C/C++</p></Col>
                        {/* <Col><img src={cpplogo} alt="" className="tech-stack-logo"/></Col> */}
                    </Row>                                                                                                                      
                    <Row className="skill python"><p>Python</p></Row>
                    <Row className="skill javascript"><p>Javascript</p></Row>

                </Col>
                <Col className="col" xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Row><h1 className="what-skill">Frontend</h1></Row>
                    <Row >
                        <Col className="skill html"><p>HTML</p></Col>
                        <Col className="skill css"><p>CSS</p></Col>
                    </Row>
                    <Row className="skill tailwind"><p>Tailwind</p></Row>
                    <Row className="skill javascript"><p>Javascript</p></Row>
                    <Row className="skill react"><p>ReactJS</p></Row>
                </Col>
                <Col className="col" xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Row><h1 className="what-skill">Backend</h1></Row>
                    <Row className="skill node"><p>NodeJS</p></Row>
                    <Row className="skill express"><p>ExpressJS</p></Row>
                    <Row className="skill flask"><p>Flask</p></Row>
                    <Col className="skill php"><p>PHP</p></Col>
                </Col>
                <Col className="col" xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Row><h1 className="what-skill">Database</h1></Row>
                    <Row className="skill mysql"><p>MySQL</p></Row>
                    <Row className="skill mongodb"><p>MongoDB</p></Row>
                    <Row className="skill postgres"><p>PostgreSQL</p></Row>
                    <Row className="skill oracle"><p>OracleDB</p></Row>
                </Col>
                <Col className="col" xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Row><h1 className="what-skill">Tools</h1></Row>
                    <Row className="skill postman"><p>Postman</p></Row>
                    <Row className="skill figma"><p>Figma</p></Row>
                    <Row className="skill git"><p>GitHub</p></Row>
                </Col>
            </Row>
        </div>
    );
}
