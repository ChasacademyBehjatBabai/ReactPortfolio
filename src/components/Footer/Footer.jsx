import React from "react";
import styled from "styled-components";
import github from '/src/assets/GitHub-Mark.png';
import figma from '/src/assets/figma.png';
import linkedin from '/src/assets/linkedin.png';
import {
  Link
} from "react-router-dom";
const StyledFooter = styled.footer`
  background-color: #424242;
  grid-area: footer;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: stretch; 
  width: 100%;
`;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1em;
    padding-right: 1em;
    `;

const Copy = styled.footer`
  display: flex;
    flex-direction: row;
    align-items: center;
`;

const SocialMedia = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const FindMeAt = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyleImg = styled.img`
width: 50px;
height: 50px;
`;

const StyledLink = styled(Link)`
    color: white;
    padding: 0.1em 0.5em 0.1em 0.5em;
    display: flex;
    
`;



const links = [
  
  {
    id: 2,
    src: github,
    text: "github"
  },
  {
    id: 3,
    src: figma,
    text: "figma"
  },
  {
    id: 4,
    src: linkedin,
    text: "linkedin"
  },

];

const navLinks = [
  {
      id: 1,
      to: "/home",
      text: "Home"
  },
  {
      id: 2,
      to: "/portfolio",
      text: "Portfolio"
      
  },
  {
      id: 3,
      to: "/about",
      text: "About"
  },
  {
      id: 4,
      to: "/contact",
      text: "Contact"
  },

];

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FindMeAt>
          <h2>Find me at:</h2>
        </FindMeAt>

        <SocialMedia>
          {links.map(link => 
          <StyleImg src={link.src} alt={link.text} key={link.id} />)}
        </SocialMedia>
        

        <div>
        {navLinks.map(link => <StyledLink to={link.to} key={link.id}>
          {link.text}
          </StyledLink>)}
        </div>

        <Copy>&copy; Bella 2023</Copy>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;