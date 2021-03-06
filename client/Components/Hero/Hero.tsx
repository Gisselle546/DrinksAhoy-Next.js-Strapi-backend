import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import Link from 'next/link';
import { device } from '../../utils/device';


const Hero = () => {


    const heroRef = useRef(null);

    const HeroWrapper = styled.div`
    display:flex;
    position:absolute;
    right:0;
    margin-right:4.5rem;
    flex-direction:column;
    justify-content:center;
    height:100%;
    width:45%;

    @media ${device.mobile} {
        
        display:flex;
        width:100%;
      }
    

    
   
    
    
    `;


    const HeroButton = styled.button`
    
    background-color: #000;
    align-items:center;
    padding:1rem;
    color: #fff;
    cursor:pointer;
    width:21%;
    border: 2px solid #fff;
    margin:0 auto;

    @media ${device.mobile} {
        width:45%;
      }
    
   
    `;

    const HeroHeader = styled.h1`
    display:flex; 
    flex-direction:row; 
    justify-Content:flex-end;
    color:#fff;
    font-size:6rem;
    font-family: Cairo, sans-serif,Indie Flower, cursive;
    @media ${device.mobile} {
        margin-top:6rem;
        font-size:2.8rem;
      }
    

    `

    const HeroContainer = styled.div`
   
    display:flex;
    flex-direction:column;
    visibility:hidden;
    
    `

    useEffect(() => {
        gsap.from(heroRef.current, {
            autoAlpha:0,
            y:50,
            duration:1.5,
            ease: "back",
            delay:1
            
          });
      });





      return (
        <HeroWrapper>
            <HeroContainer ref={heroRef}>
            <HeroHeader><span style={{marginLeft:"3rem"}}>Start</span><br/> The Party</HeroHeader>
            <Link href="/beers"><HeroButton>Learn More</HeroButton></Link>
            </HeroContainer>
            
        </HeroWrapper>
    )
}

export default Hero;
