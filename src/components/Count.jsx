import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./Count.css";
import { Col, Row } from "antd";

export default function Count() {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-section");

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !startCounting) {
          setStartCounting(true);
        }
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startCounting]);

  return (
    <div id="count-section" className="count">
      <div className="stats">
        <Row className="stats-row">
          <Col span={4} className="data">
            <h1>
              <CountUp start={startCounting ? 0 : null} end={6} duration={6} separator="," />
            </h1>
            <h5>Projects completed</h5>
          </Col>
          <Col span={4} className="data">
            <h1>
              <CountUp start={startCounting ? 0 : null} end={150} duration={6} separator="," />+
            </h1>
            <h5>DSA Questions Solved</h5>
          </Col>
          <Col span={4} className="data">
            <h1>
              <CountUp start={startCounting ? 0 : null} end={4} duration={6} separator="," />
            </h1>
            <h5>Programming Languages</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}
