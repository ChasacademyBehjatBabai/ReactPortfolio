import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import logo from './assets/react.svg';
import Footer from './Footer';

const LogoContainer = styled.div`
max-width: 2rem;
grid-area: logo; 
display: flex;
margin-left: 35px;
`;

const StyleImg = styled.img`
width: 100%;
`;

const MainContainer = styled.div`
grid-area: main;
`;

const GridContainer = styled.div`
  display: grid; 
  grid-template-rows: 7rem repeat(3, 1fr) 7rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;


function App() {

  return (
    <Router>
      <GridContainer>
        <Navbar />
        <LogoContainer>
          <StyleImg src={logo} alt="Logo" />
        </LogoContainer>

        <MainContainer>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/">
            </Route>
          </Switch>
          <h1>Bellas Witherstorm</h1>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  );
}


export default App;