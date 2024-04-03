import React from "react";
import "./Projects.css";
import { Card, Row, Col } from "antd";
import { FaGithub } from "react-icons/fa";
import WordGuess from "../images/wordGuess.png";
import hms from "../images/mediIcon.png";
import paletteUI from "../images/paletteUI.png";
import palettelogo from "../images/palletepros.jpeg";
import podcashh from "../images/podcashh.png";
import medi from "../images/medibridge.jpeg";
import imac from "../images/macbg.png";

const Projects = () => {
    return (
        <div className="main">
            <Row>

              <Col span={12}>
              <h1 className="heading">projects</h1>
              <p className="project-desc"></p>
              </Col> 

              <Col span={12}>
                <Row>
                    <div className="mac-mini-div">
                        <img src={imac} alt="" className="mac-img" />
                        
                        {/* <div className="imageSlider">

                        </div> */}
                    </div>
                </Row>
                
              </Col>

            </Row>
            
            
        </div>
    )
};
export default Projects;

















/*

<Row className="cards1">
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={podcashh} alt="" className="project-thumbnail" />
                                <h4>Podcashh</h4>
                                <p>ReactJS, CSS, Styled Components, NodeJS, ExpressJS, Firebase, MongoDB</p>
                            </div>
                            <div className="card-back">
                                <h6>A video streaming platform that makes curiosity cool.</h6>
                                <p>Podcashh is a free video and audio streaming platform dedicated to providing verified and value-driven content. With a focus on building a smart community, users can showcase their curiosity and smartness scores, fostering a culture of continuous learning. The platform also features a rewards system, enticing users to engage with informative content. </p>
                                <a href="https://homobliss.com/">
                                    <button className="git-btn"><FaGithub size="2em" />
                                    </button>
                                </a>                            </div>
                        </div>
                    </Card>

                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={palettelogo} alt="" className="project-thumbnail" />
                                <h4>PalettePro</h4>
                                <p>ReactJS, HTML, Styled Components, NodeJS, ExpressJS</p>
                            </div>
                            <div className="card-back">
                                <h6>Art-focused E-Commerce Platform</h6>
                                <h6 style={{color: "white"}}>Where Art Meets Technology, and Creativity Finds a Home.</h6>
                                <p>PalettePro merges art and technology, serving as a dynamic platform to showcase my artistic passion, establish a personal brand, foster an art community, and catalyze growth in both creative and technological pursuits.</p>
                                <a href="https://github.com/DanejSakshi13/Art-Ecommerce/tree/master">
                                    <button className="git-btn"><FaGithub size="2em" />
                                    </button>
                                </a>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={medi} alt="" srcset="" className="project-thumbnail" />
                                <h4>MediBridge</h4>
                                <p>HTML, CSS, Jacascript, PHP, MySQL</p>

                            </div>
                            <div className="card-back">
                                <h6>Hospital Management System</h6>
                                <p>Health Data Management System that simplifies healthcare data handling, providing a secure platform for patients and healthcare professionals to manage electronic health records, book appointments, and enhance overall healthcare efficiency.</p>
                                <a href="https://github.com/DanejSakshi13/MediBridge/tree/master">
                               <button className="git-btn"><FaGithub size="2em" />
                                </button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className="cards2">
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Task Master</h4>
                                <p>HTML, CSS, Bootstrap, Flask, Python, SQLAlchemy</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/To-Do-List/tree/master"><h6>To-do list application</h6></a>
                                <p> Task Master is a robust todo list application designed to enhance productivity by efficiently managing tasks and enabling seamless CRUD operations for a streamlined workflow.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Word Guessing Game</h4>
                                <p>HTML, CSS, Javascript</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/word-guessing-game">
                                <h6>Web-based, fun word guessing game</h6>  
                                </a>
                                <p>This game randomly selects a word, initially masking it with underscores for missing letters. Players can input letter guesses, receiving instant feedback on correctness and witnessing their progress as correct letters are revealed.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Random Quotes</h4>
                                <p>HTML, CSS, Javascript</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/Random-Quote-Generator">
                                <h6>Web application that generates random quotes</h6>
                                </a>
                                <p> A web-based collection of handpicked random quotes that let you read and conveniently copy quotes to your clipboard for daily inspiration.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>*/







/*

<Row className="cards1">
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={podcashh} alt="" className="project-thumbnail" />
                                <h4>Podcashh</h4>
                                <p>ReactJS, CSS, Styled Components, NodeJS, ExpressJS, Firebase, MongoDB</p>
                            </div>
                            <div className="card-back">
                                <h6>A video streaming platform that makes curiosity cool.</h6>
                                <p>Podcashh is a free video and audio streaming platform dedicated to providing verified and value-driven content. With a focus on building a smart community, users can showcase their curiosity and smartness scores, fostering a culture of continuous learning. The platform also features a rewards system, enticing users to engage with informative content. </p>
                                <a href="https://homobliss.com/">
                                    <button className="git-btn"><FaGithub size="2em" />
                                    </button>
                                </a>                            </div>
                        </div>
                    </Card>

                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={palettelogo} alt="" className="project-thumbnail" />
                                <h4>PalettePro</h4>
                                <p>ReactJS, HTML, Styled Components, NodeJS, ExpressJS</p>
                            </div>
                            <div className="card-back">
                                <h6>Art-focused E-Commerce Platform</h6>
                                <h6 style={{color: "white"}}>Where Art Meets Technology, and Creativity Finds a Home.</h6>
                                <p>PalettePro merges art and technology, serving as a dynamic platform to showcase my artistic passion, establish a personal brand, foster an art community, and catalyze growth in both creative and technological pursuits.</p>
                                <a href="https://github.com/DanejSakshi13/Art-Ecommerce/tree/master">
                                    <button className="git-btn"><FaGithub size="2em" />
                                    </button>
                                </a>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={medi} alt="" srcset="" className="project-thumbnail" />
                                <h4>MediBridge</h4>
                                <p>HTML, CSS, Jacascript, PHP, MySQL</p>

                            </div>
                            <div className="card-back">
                                <h6>Hospital Management System</h6>
                                <p>Health Data Management System that simplifies healthcare data handling, providing a secure platform for patients and healthcare professionals to manage electronic health records, book appointments, and enhance overall healthcare efficiency.</p>
                                <a href="https://github.com/DanejSakshi13/MediBridge/tree/master">
                               <button className="git-btn"><FaGithub size="2em" />
                                </button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className="cards2">
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Task Master</h4>
                                <p>HTML, CSS, Bootstrap, Flask, Python, SQLAlchemy</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/To-Do-List/tree/master"><h6>To-do list application</h6></a>
                                <p> Task Master is a robust todo list application designed to enhance productivity by efficiently managing tasks and enabling seamless CRUD operations for a streamlined workflow.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Word Guessing Game</h4>
                                <p>HTML, CSS, Javascript</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/word-guessing-game">
                                <h6>Web-based, fun word guessing game</h6>  
                                </a>
                                <p>This game randomly selects a word, initially masking it with underscores for missing letters. Players can input letter guesses, receiving instant feedback on correctness and witnessing their progress as correct letters are revealed.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card">
                        <div className="card-content">
                            <div className="card-front">
                                <h4>Random Quotes</h4>
                                <p>HTML, CSS, Javascript</p>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/DanejSakshi13/Random-Quote-Generator">
                                <h6>Web application that generates random quotes</h6>
                                </a>
                                <p> A web-based collection of handpicked random quotes that let you read and conveniently copy quotes to your clipboard for daily inspiration.</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>*/