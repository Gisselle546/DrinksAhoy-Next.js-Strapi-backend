import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FooterWrapper,ListItem} from './Footer.style';


const Footer = () => {
    return (
        <div>
        <FooterWrapper>
            <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center", height:"20%",backgroundColor:"#2e2d2b"}}>
                <Link href="/"><img style={{marginLeft:"1rem"}}src={'/blue.png'} height="100%"/></Link>
            </div>
            <div style={{display:"flex", height:"20%", alignItems:"flex-end",backgroundColor:"#2e2d2b"}}>
                <ul style={{listStyleType:"none", display:"flex", fontSize:"1.7rem"}}>
                    
                    <Link href="/cocktails"><ListItem>Drinks</ListItem></Link>
                    <Link href="/beers"><ListItem>Beer</ListItem></Link>
                    <Link href="/wine"><ListItem>Wine</ListItem></Link>
                </ul>
                
            </div>
        </FooterWrapper>
       
        </div>
    )
}

export default Footer;
