import React, { useEffect, useState,useRef }  from 'react';
import { FaArrowRight,FaArrowLeft} from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../utils/device';
import {SliderWrapper,SliderItems,Header} from './Slider.style';
import { gsap}  from "gsap";



interface Props{
    data:any
}

const Bottleheader = styled.h2`
color:#fff; 
font-size:1.7rem;
@media ${device.mobile} {
  font-size:0.8rem
  
   
 }


`;



const Slider = ({data}:Props) => {

    const [beers,setBeer] = useState(data.data)
    const slidecon = useRef(null);
    const [values,setValues] = useState<any>(0); 
    
    
    
    const TLLOAD = gsap.timeline({
        default: {
          ease: "power2"
        }
      });

      useEffect(() => {
        TLLOAD.from(slidecon.current, { y:-20,duration:1.4})
          
          
      },[values]);


    const nextSlide = () => {
        setValues((oldIndex:any) => {
          let index = oldIndex + 1
          if (index > beers.length - 1) {
            index = 0
          }
          return index
        })
      }
      const prevSlide = () => {
        setValues((oldIndex:any) => {
          let index = oldIndex - 1
          if (index < 0) {
            index = beers.length - 1
          }
          return index
        })
      }


      useEffect(() => {
        let slider = setInterval(() => {
          setValues((oldIndex:any) => {
            let values = oldIndex + 1
            if (values > beers.length - 1) {
              values = 0
            }
            return values
          })
        }, 6000)
        return () => {
          clearInterval(slider)
        }
      }, [values,beers])



    return (
       
        <SliderWrapper>

           <div style={{display:"flex", flexDirection:"column"}}></div>

            <SliderItems>
                <FaArrowLeft color="#fff" size="3em" onClick={()=>prevSlide()} style={{cursor:"pointer"}}/>
                
                {
                    beers.map((beer:any,valus:any)=>{
                        
                        return(
                            <>
                                
                                 { 
                          values!==valus?
                                    <img ref={slidecon} key={values} height={"50%"} src={beer.attributes.image}
                                    alt="Picture of the author"
                                    
                                    /> 
                                    :( 
                                    
                                    <div key={values} style={{height:"84%"}}>
                                    
                                    <Bottleheader>{beer.attributes.title}</Bottleheader>
                                    
                                    <img  height={"79%"} src={beer.attributes.image}
                                    alt="Picture of the author"
                                    
                                    /> 

                                    </div>
                                  
                                    )
                                
                                }
                            </>

                        
                        )
                        
                    })
                }
                <FaArrowRight color="#fff" size="3em" onClick={()=>nextSlide()} style={{cursor:"pointer"}}/>
              
            </SliderItems>

            <Link href="/beers"><Header>View All Products</Header></Link>
        </SliderWrapper>
       
    )
}

export default Slider;
