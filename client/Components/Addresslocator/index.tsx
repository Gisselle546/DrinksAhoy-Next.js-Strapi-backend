import React from 'react'
import Link from 'next/link';
import { AddresslocationWrapper,Addresslocationheader,InputContainer,Input, Button, PictureContainer } from './index.style';
import {MdLocalGroceryStore} from 'react-icons/md';
import {BiFoodMenu} from 'react-icons/bi'
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Addresslocator = () => {
    return (
       <>
        <AddresslocationWrapper >
            <Addresslocationheader >Find your nearest liquor store</Addresslocationheader>
            
            
                    <InputContainer>
                           
                               <Link href="/results"><Button>Find a store near you</Button></Link>
                            
                    </InputContainer>
                    <PictureContainer>
                <MdLocalGroceryStore color="#fff" size="4em"/>
                <BiFoodMenu color="#fff" size="4em"/>
            </PictureContainer>
            <p style={{color:"#fff",width:"100%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </AddresslocationWrapper>


       </>
    )
}

export default Addresslocator;
