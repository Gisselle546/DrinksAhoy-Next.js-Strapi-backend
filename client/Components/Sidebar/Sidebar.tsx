import React, { useState } from 'react'
import { SidebarWrapper,HamburgerWrapper, ListItems,Xspot, ListItem } from './Sidebar.style';
import {GiHamburgerMenu} from 'react-icons/gi'

const Sidebar = () => {
    const[open,setOpen] = useState(false)
    
    return (
        <>
            {

            open?(
            <SidebarWrapper>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <ListItems>
                        <ListItem>Beers</ListItem>
                        <ListItem>Cocktails</ListItem>
                        <ListItem>Wine</ListItem>

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
