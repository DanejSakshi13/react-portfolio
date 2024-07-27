import React from "react";
import "./Hire.css";
import { Col, Row } from "antd";



export default function Hire() {


    const handleResumeDownload = () => {
        console.log("Download clicked"); // Debugging line
        window.open('/Sakshi_Danej_Resume.pdf', '_blank');
    };

    return (
        <div className="hire-main-section">
            <Row>
                <Col span={12}>
                    <h1 className="hire-me-heading">let's get in touch</h1>
                    <div className="circle">
                        <div
                            onClick={handleResumeDownload} // Handle click event
                            className="hire-me-ripple"
                        >
                            hire me
                        </div>
                    </div>
                </Col>
                <Col span={12}> </Col>
            </Row>
        </div>
    );
}
