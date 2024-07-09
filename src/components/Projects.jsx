import React from "react";
import "./Projects.css";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Projects = () => {
    return (
        <div className="projects">
            <h1 className="heading">projects</h1>
            <div className="mac-mini-div">
                <div className="mac-screen">
                    <Carousel fade interval={3000} >
                        <Carousel.Item className="carousel-item">
                            <h1>podcashh</h1>
                            <p>A free video and audio streaming platform</p>
                            <div style={{display:"flex",gap: "5px"}}>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/podcashhcopy2"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/podcashhcopy2"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item  className="carousel-item">
                            <h1>PalettePros</h1>
                            <p>Art focused e-commerce website</p>
                            <div style={{display:"flex",gap: "5px"}}>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/Art-Ecommerce/tree/master"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/Art-Ecommerce/tree/master"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item  className="carousel-item">
                            <h1>Medibridge</h1>
                            <p>Hospital Management System</p>
                            <div style={{display:"flex",gap: "5px"}}>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/MediBridge/tree/master"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/MediBridge/tree/master"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item  className="carousel-item">
                            <h1>Personal Portfolio</h1>
                            <p>Personal and professional highlights</p>
                            <div style={{display:"flex",gap: "5px"}}>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/react-portfolio"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
                            <div className="round-button"><a href="https://react-portfolio-three-pink.vercel.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item  className="carousel-item">
                            <h1>Swipe</h1>
                            <p>Swipe right on your next dev partner</p>
                            <div style={{display:"flex",gap: "5px"}}>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/SWIPE"><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
                            <div className="round-button"><a href="https://github.com/DanejSakshi13/SWIPE"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a></div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;
