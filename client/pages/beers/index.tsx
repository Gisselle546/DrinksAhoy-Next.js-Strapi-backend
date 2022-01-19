import type { GetStaticProps, NextPage } from 'next'
import { BeerHeader, Content, BeerWrapper } from './index.style';
import { fetchQuery } from '../../utils/fetchqueries';

import Card from '../../Components/Card/Card';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }


 
const Beers = ({data}:any) => {


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
                <BeerHeader >Beers</BeerHeader>
                    <BeerWrapper ref={trigger}>
                        {
                            data.map((beer:any)=>{
                                return <Card data={beer}/>;
                            })
                        }
                        
                    </BeerWrapper>   
                    <div style={{height:"50rem"}}></div>
                
            
        </>
    )
}

export default Beers;


export const getStaticProps: GetStaticProps = async (context) => {

    const data = await fetchQuery('beers')
  
    return {
      props: {
        
        data:data.data
  
      },
      revalidate: 1,
    };
  
  
  
  }