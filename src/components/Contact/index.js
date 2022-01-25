import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Row, Col } from 'react-bootstrap'; 
import Resume from '../../assets/images/Resume.pdf'

function ContactForm() {
    return (
        <section>
        <h1 data-testid='h1tag' className="contact">Contact Me</h1>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/aabare"><img src="https://img.icons8.com/material-rounded/344/github.png" alt="github-logo" class="icon"/></a><p class="icon-text">GitHub</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/adam-abare-622459218/"><img src="https://img.icons8.com/ios-filled/344/linkedin.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">Linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:a.6942@yahoo.com"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/external-email-interface-kiranshastry-solid-kiranshastry.png" alt="mail-logo" class="icon"/></a><p class="icon-text">email</p>
            </Col>

            <Col lg={3} md={12}>
            <a href={Resume} download><img src="https://img.icons8.com/external-prettycons-solid-prettycons/344/external-resume-business-and-finance-prettycons-solid-prettycons.png" alt="resume" class="icon"/></a><p class="icon-text">Resume</p>
            </Col>
        </Row>
        </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">Front-end technologies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, Materalize)
                    </li>
                    <li>
                        UI/UX Design
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">Back-end technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql lite3, mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>

            <Col lg={4} md={12}>
                <h2 class="education">My Education</h2>
                <p>
                    <span className="school-name">RUTGERS UNIVERSITY</span><br></br>
                    Full Stack Boot Camp Certificaiton
                    <br></br>
                    <br></br>
                    <span className="school-name">WASHINGTON TOWNSHIP HIGH SCHOOL</span><br></br>
                    General Education Degree

                </p>
            </Col>
            </Row>
            </div>
        </section>
    );

}

export default ContactForm;