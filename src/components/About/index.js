import React from 'react';
//import images
import myImage from '../../assets/images/myimage.jpg';
import cityImage from '../../assets/images/NYC.jpg'
import { Col } from 'react-bootstrap';

function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="profile-picture"/></center>
      <p class="name">Adam Abare</p>
      <p class="job">Hacker in Training</p>
      <h2 class="about">About Me</h2>
        <p>
        Hi, my name is Adam. I'm an aspiring Full Stack Web Developer currently living in New Jersey. Throughout my life I always loved technology so I decided that I wanted to move away from the conventional retial jobs and actually have a career in technology.
        <br></br>
        <br></br>
        Some fun facts about me are that I love wolves, cartoons, and video games. My favorite cartoon is Tom and Jerry and in my spare time I love playing World of Warcraft. I am a quick learner and I love learning new things. 
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;