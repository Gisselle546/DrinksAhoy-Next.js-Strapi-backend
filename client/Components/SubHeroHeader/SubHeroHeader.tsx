import React, { useEffect, useRef } from 'react'
import { HeroSecond, HeroHeaderContainer, HeroHeader, SubHeader } from './SubHeroHeader.style';
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }






const SubHeroHeader = () => {


    const page = useRef(null);
    const trigger = useRef(null);

    useEffect(() => {
        gsap.to(trigger.current, {
            scrollTrigger: {
              
              trigger: page.current,
              start: "top top+=400",
              end:"bottom",
             
              
              
            },
            
            y:"24px",
            ease: "back",
            duration:2.2
          });
      }, []);





    return (
        <HeroSecond>
            <HeroHeaderContainer>
                <HeroHeader ref={page}>Share a Drink </HeroHeader>
            </HeroHeaderContainer>
            <SubHeader ref={trigger}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere diam dui, a pharetra turpis tristique sit amet. Praesent ut facilisis ipsum.</SubHeader>
        </HeroSecond>
    )
}

export default SubHeroHeader;
