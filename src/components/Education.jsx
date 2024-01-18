import { Col, Row } from "antd";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons'; import React from "react";
import "./Education.css";

export default function Education() {
    return (
        <Row className="main">
            <Col span={24} className="education">
                <h1 className="col-heading-education">academic overview</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#212121', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                        iconStyle={{ background: '#212121', color: '#fff', boxShadow: ' 1px 0 100px 15px rgba(255, 255, 255, 0.6)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faSchool} />}
                    >
                        <h4 className="vertical-timeline-element-title">Rasbihari International school</h4>
                        <p style={{color:"#dfff50"}}>
                            SSC Percentage : 88.80%
                        </p>
                        <h5>2019</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#212121', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                        iconStyle={{ background: '#212121', color: '#fff', boxShadow: ' 1px 0 100px 15px rgba(255, 255, 255, 0.6)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faBuildingColumns} />}

                    >
                        <h4 className="vertical-timeline-element-title">H.P.T. Arts & R.Y.K. Science Junior College</h4>
                        <p style={{color:"#dfff50"}}>
                            HSC Percentage : 86.67%
                        </p>
                        <h5>2021</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#212121', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                        iconStyle={{ background: '#212121', color: '#fff', boxShadow: ' 1px 0 100px 15px rgba(255, 255, 255, 0.6)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}

                    >
                        <h4 className="vertical-timeline-element-title">K. K. Wagh Institute of Engineering Education & Research</h4>
                        <p style={{color:"#dfff50"}}>
                            Avg CGPA : 9.00
                        </p>
                        <h5>2021-2025</h5>
                        {/* <p>
                            Course work : Data Structures and Algorithms, Object Oriented Programming, Database Management
System, Human Computer Interface, Blockchain technology
                        </p> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#212121', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                        iconStyle={{ background: '#212121', color: '#fff', boxShadow: ' 1px 0 100px 15px rgba(255, 255, 255, 0.6)', border: '4px solid white' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}

                    >
                        <h4>Homobliss - Evolving Minds</h4>
                        <p><span style={{ fontStyle: 'italic' }}>Feb 2023 - Nov 2023 </span> : <span style={{ color: '#dfff50' }}>FrontEnd Web Dev Intern</span></p>
                        <p><span style={{ fontStyle: 'italic' }}>Nov 2023 - Present </span> : <span style={{ color: '#dfff50' }}>Fullstack Web Dev Intern</span></p>
                        <h5>Feb 2023 - Present</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#212121', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                        iconStyle={{ background: '#212121', color: '#fff', boxShadow: ' 1px 0 100px 15px rgba(255, 255, 255, 0.6)', border: '4px solid white' }}
                    >
                        <h2 style={{ color: '#dfff50' }}>Imagine Your Logo Here!</h2>
                    </VerticalTimelineElement>
                </VerticalTimeline>


            </Col>

        </Row>
    );
}

