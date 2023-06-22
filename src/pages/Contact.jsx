import React from 'react'
import ContactPic from '/src/assets/ContactPic.jpg';
import styled from 'styled-components';

export const StyledContactPic = styled.img`
    width: 100%;
    height: 50%

`;




function Contact () {
    return (
    <div>
        <p>contact</p>
        <StyledContactPic src={ContactPic} alt="contact-pic"/>
        
    </div>
    )

}

export default Contact;