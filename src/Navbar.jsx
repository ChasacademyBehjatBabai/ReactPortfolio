import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: top;
    grid-area: 1 / 5 / span 1 / span 1;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: white;
    padding: 0.1em 0.5em 0.1em 0.5em;
    margin: 20px;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </StyledNav>
    );
}


export default Navbar;
