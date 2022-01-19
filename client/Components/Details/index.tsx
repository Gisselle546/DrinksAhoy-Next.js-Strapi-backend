import React from 'react'

interface Props{
    details:any
}

export const Details = ({details}:Props) => {

    return (
        <div style={{display:'flex', margin:"1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding:"0.3rem", justifyContent:"flex-start"}}>
           {
              details.photos&&<img style={{height:'140px', width:'140px'}}src={details!.photos[0].getUrl()}/>
           }
        
        <div style={{marginLeft:"0.4rem"}}>
            <p>{details.name}</p>
            <p style={{fontSize:'0.9rem', color:"#1f88d7", fontWeight:"bold"}}>{details.vicinity}</p>
            
        </div>
            
        </div>
    )
}

