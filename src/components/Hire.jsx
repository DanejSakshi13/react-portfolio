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
                <img src={dotAnimation} alt="" srcset="" />
                </Col>

                <Col span={12}> </Col>
            </Row>
        </div>
    );
}



























{/* <h1 className="hire-me-heading">connect with me</h1>
            <form>
                <input className="inputfields" type="email" name="email" placeholder="email" />
                <input className="inputfields" type="text" name="msg" placeholder="message" />
                <button className="submit-btn"  type="submit" placeholder="Stay connected">
                Connect
                <FontAwesomeIcon icon={faPlay} className="play-icon"/>
                    </button> /
            </form> */}