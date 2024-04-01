import { Col, Row } from "antd";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons'; import React from "react";
import "./Education.css";

export default function Education() {
    return (
        <Row className="main">                <h1 className="col-heading-education">academic overview</h1>

            <Col span={24} className="education">

                <div className="timeline-div">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#161616', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #161616' }}
                        iconStyle={{ background: '#161616', color: '#fff', boxShadow: ' 0px 0px 20px 10px rgba(255, 255, 255, 0.4)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faSchool} />}
                    >
                        <h5 className="vertical-timeline-element-title">Rasbihari International school</h5>
                        <p style={{color:"#dfff50"}}>
                            SSC Percentage : 88.80%
                        </p>
                        <h6>2019</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#161616', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #161616' }}
                        iconStyle={{ background: '#161616', color: '#fff', boxShadow: ' 0px 0px 20px 10px rgba(255, 255, 255, 0.4)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faBuildingColumns} />}

                    >
                        <h5 className="vertical-timeline-element-title">H.P.T. Arts & R.Y.K. Science Junior College</h5>
                        <p style={{color:"#dfff50"}}>
                            HSC Percentage : 86.67%
                        </p>
                        <h6>2021</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#161616', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #161616' }}
                        iconStyle={{ background: '#161616', color: '#fff', boxShadow: ' 0px 0px 20px 10px rgba(255, 255, 255, 0.4)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}

                    >
                        <h5 className="vertical-timeline-element-title">K. K. Wagh Institute of Engineering Education & Research</h5>
                        <p style={{color:"#dfff50"}}>
                            Avg CGPA : 9.00
                        </p>
                        <h6>2021-2025</h6>
                        {/* <p>
                            Course work : Data Structures and Algorithms, Object Oriented Programming, Database Management
System, Human Computer Interface, Blockchain technology
                        </p> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#161616', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #161616' }}
                        iconStyle={{ background: '#161616', color: '#fff', boxShadow: ' 0px 0px 20px 10px rgba(255, 255, 255, 0.4)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}

                    >
                        <h5>Homobliss - Evolving Minds</h5>
                        <p><span style={{ fontStyle: 'italic' }}>Feb 2023 - Nov 2023 </span> : <span style={{ color: '#dfff50' }}>FrontEnd Web Dev Intern</span></p>
                        <p><span style={{ fontStyle: 'italic' }}>Nov 2023 - Present </span> : <span style={{ color: '#dfff50' }}>Fullstack Web Dev Intern</span></p>
                        <h6>Feb 2023 - Present</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#161616', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #161616' }}
                        iconStyle={{ background: '#161616', color: '#fff', boxShadow: ' 0px 0px 20px 10px rgba(255, 255, 255, 0.4)', border: '4px solid white' }}
                    >
                        <h5 style={{ color: '#dfff50' }}>Imagine Your Logo Here!</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                </div>
            </Col>

        </Row>
    );
}

