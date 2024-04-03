import React from "react";
import "./Projects.css";
import { Card, Row, Col } from "antd";
import ProjectCarousel from "./ProjectCarousel";
import ProjectDescriptionCarousel from "./ProjectDescription";

const Projects = () => {
    return (
        <Row className="projects">
            <Col span={12}>
                <h1 className="heading">projects</h1>
                <div className="project-desc"><ProjectDescriptionCarousel/></div>
            </Col>
            <Col span={12}>
                <div className="mac-mini-div">
                       <div className="carousel"><ProjectCarousel /></div> 
                </div>
            </Col>
        </Row>
    )
};
export default Projects;
