import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Hire.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import dotAnimation from "../images/dot-animation.gif";

export default function Hire() {
    return (
        <div className="hire-main-section">
            <Row>
                <Col span={12}>  <h1 className="hire-me-heading">let's get in touch</h1>
                <div className="circle">
                <a href="mailto:sakshi1314.d@gmail.com" className="hire-me-ripple">Hire me</a>
                </div>
                </Col>
                <Col span={12}> </Col>
            </Row>
        </div>
    );
}





















