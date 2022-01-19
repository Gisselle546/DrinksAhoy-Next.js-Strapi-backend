import React, { useEffect, useRef } from 'react'
import { GetStaticProps } from 'next';

import { fetchQuery } from '../../utils/fetchqueries';
import { Content, DrinksWrapper,DrinksHeader } from './index.style';
import { gsap } from "gsap/dist/gsap";
import Card from '../../Components/Card/Card';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

const Cocktails = ({data}:any) => {

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
        <>
            <Content/>
            <DrinksHeader>Drinks</DrinksHeader>
                <DrinksWrapper ref={trigger}>
                {
                        data.map((drinks:any,id:any)=>{
                            return <Card key={id} data={drinks}/>;
                        })
                }
            </DrinksWrapper>  
        <div style={{height:"50rem"}}></div>
            
        </>
    )
}

export default Cocktails;

export const getStaticProps: GetStaticProps = async (context) => {

    const data = await fetchQuery('cocktails')
  
    return {
      props: {
        
        data:data.data
  
      },
      revalidate: 1,
    };
  
  
  
  }