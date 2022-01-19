import React, { useRef, useState } from 'react'
import { SidebarWrapper,HamburgerWrapper, ListItems,Xspot, ListItem } from './Sidebar.style';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import Link from 'next/link';


const Sidebar = () => {
    const[open,setOpen] = useState(false)
    const side = useRef(null);
    
    return (
        <>
            {

            open?(
            <SidebarWrapper ref={side}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <ListItems>
                    <Link href="/"><ListItem><AiFillHome/>Home</ListItem></Link>
                    <Link href="/beers"><ListItem>Beers</ListItem></Link>
                    <Link href="/cocktails"><ListItem>Cocktails</ListItem></Link>
                    <Link href="/wine"><ListItem>Wine</ListItem></Link>

                    </ListItems>
                
                    <Xspot>
                       <h1 style={{color:"#fff",cursor:"pointer"}}onClick={()=>setOpen(!open)}>X</h1> 
                    </Xspot>

                </div>

            </SidebarWrapper>
            ):(
                <HamburgerWrapper>
                    <GiHamburgerMenu size="32" style={{color:"#36a", cursor:"pointer", marginTop:"2rem"}} onClick={()=>setOpen(!open)}/>
                </HamburgerWrapper>
           
            )
            
            }
       
            
        </>
    )
}

export default Sidebar;
