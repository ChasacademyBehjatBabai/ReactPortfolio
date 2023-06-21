import React from "react";
import styled from "styled-components";
import BBInitials from '/Users/bella/Documents/projects/noob/src/assets/bb.svg';

import {
    Link
} from "react-router-dom";

export const Initials = styled.img`
position: absolute;
left: 109.52px;
top: 16.2px;
width: 41.05px;
height: 65.8px;

`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    grid-area: top;
    grid-area: 1 / 3 / span 1 / span 1;
    align-items: center;
    width: 664px;
    height: 75px;
    left: 364px;
    top: 85px;
    font-family: 'Italiana';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 188.3%;
    /* or 75px */
    letter-spacing: 0.175em;
    background-color: #fffff;
    
`;

const StyledLink = styled(Link)`
    color: black;
    padding: 0.1em 0.5em 0.1em 0.5em;
    margin: 20px;
`;

const links = [
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


const Navbar = () => {

    return (
        <StyledNav>
                        <Initials src={BBInitials} alt="styled-initials"/>

            {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}

        </StyledNav>
    );
}


export default Navbar;
