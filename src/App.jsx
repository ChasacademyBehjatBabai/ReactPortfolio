import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';



const LogoContainer = styled.div`
max-width: 4rem;
max-height: 4rem;
margin-top: 15px;
grid-area: logo; 
display: flex;
margin-left: 35px;
`;

const StyleImg = styled.img`
width: 100%;

`;

const MainContainer = styled.div`
grid-area: main;
margin-left: 20px;
margin-right: 20px;

border-top-style: solid;
display: flex;
justify-content: center;


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

        </LogoContainer>
        <MainContainer>
          
          <Switch>
            <Route path="/home">
              <Home />
              <Card />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
          </Switch>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  );
}


export default App;