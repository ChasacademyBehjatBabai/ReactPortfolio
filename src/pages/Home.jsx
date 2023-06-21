import React from 'react'
import StyledImg from '/Users/bella/Documents/projects/noob/src/assets/Oceanpic.jpg';

import styled from 'styled-components';

export const StyleImg = styled.img`
width: 110vw;
    
`;

const Styledfotocontainer = styled.div`
position: absolute;
width: 1203px;
height: 811px;
left: 119px;
top: 200px;
background: rgba(254, 237, 225, 0.85);
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

const HomeImage = styled.img`
position: absolute;
width: 305px;
height: 467px;
left: 228px;
top: 230px;
background: url(aboutpic.jpg);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 20px;  
`;

const NameRectangle = styled.div`
position: absolute;
width: 801px;
height: 526px;
left: 417px;
top: 280px;

background: #e86919b9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
`;

const TextContainer = styled.div`
    position: absolute;
width: 408px;
height: 116px;
left: 784px;
top: 700px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 151.5%;
/* or 30px */

letter-spacing: 0.135em;

color: #ffffff;
`;

const UxBox = styled.div`
position: absolute;
width: 438px;
height: 81px;
left: 730px;
top: 400px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 138.5%;
/* or 55px */

letter-spacing: 0.15em;

color: rgba(255, 255, 255, 0.75);

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
z-index: 99;

`;
const AboutMeButton = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row-reverse;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 0%;

/* identical to box height, or 0px */

letter-spacing: 0.025em;

color: #FFFFFF;
box-sizing: border-box;
position: absolute;
width: 123px;
height: 48px;
left: 730px;
top: 550px;
  
background: #FBD0B2;
border: 1px solid rgba(255, 255, 255, 0.75);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
z-index: 99;
`;

const CvButton = styled.div`
box-sizing: border-box;

position: absolute;
width: 123px;
height: 48px;
left: 880px;
top: 550px;

display: flex;
justify-content: space-around;
flex-direction: row-reverse;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 0%;

background: #FEE1C5;
border: 1px solid rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
z-index: 99;

`;

export const Initials = styled.img`
width: 41.05px;
height: 65.8px;

`;

function Home() {
    return (
        <div>
            <StyleImg src={StyledImg}/>
            <p>Home</p>
            <UxBox>
                <h1>Behjat Babai</h1>
                <p>UX/UI med frontend kompetens</p>

            </UxBox>
            <AboutMeButton>
                <p>Mer om mig</p>
            </AboutMeButton>
            <CvButton>
                <p>CV</p>

            </CvButton>
            <NameRectangle>

            </NameRectangle>
            <TextContainer>
                "Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep." — Scott Adams
            </TextContainer>
            <Styledfotocontainer>
                <HomeImage src="src/assets/HomeImg.png" alt="Home Image" />

            </Styledfotocontainer>
        </div>
    )

}


export default Home;

