import React from "react";
import styled from "styled-components";
import github from './assets/Github-Mark.png';
import figma from './assets/figma.png';
import linkedin from './assets/linkedin.png';
import './Footer.css';

const StyledFooter = styled.footer`
  background-color: #424242;
  grid-area: footer;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: stretch; 
  padding: 2em;
`;


const StyleImg = styled.img`
width: 50px;
height: 50px;
`;

const Footer = () => {
  return (
    <StyledFooter>
<div className="footerContainer">
      <div id="findMeAt">
        <h2>Find me at:</h2>
      </div>

      <div className="socialMedia">
        <StyleImg src={github} alt="Github" className="github" />
        <StyleImg src={figma} alt="figma" />
        <StyleImg src={linkedin} alt="linkedin" className="linkedin" />
      </div>  

      <div>
        <ul>
          <ul>Home</ul>
          <ul>Contact</ul>
          <ul>Portfolio</ul>
          <ul>About</ul>
        </ul>
      </div>

      <p>&copy; Bella 2023</p>
</div>
    </StyledFooter>
  );
}

export default Footer;