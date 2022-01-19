import React, { useEffect, useRef } from 'react'
import {Content, WineWrapper, WineHeader} from './index.style'
import Card from '../../Components/Card/Card'

import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { fetchQuery } from '../../utils/fetchqueries';
import { GetStaticProps } from 'next/types';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

const Wine = ({data}:any) => {

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
               <WineHeader ref={page}>Wines</WineHeader>
                    <WineWrapper ref={trigger}>
                        {
                            data.map((wine:any)=>{
                                return <Card data={wine}/>;
                            })
                        }
                        
                    </WineWrapper>   
             <div style={{height:"50rem"}}></div>
            
            
        </>
    )
}

export default Wine;


export const getStaticProps: GetStaticProps = async (context) => {

    const data = await fetchQuery('wines')
  
    return {
      props: {
        
        data:data.data
  
      },
      revalidate: 1,
    };
  
  
  
  }