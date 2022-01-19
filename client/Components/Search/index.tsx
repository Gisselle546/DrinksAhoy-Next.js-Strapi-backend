import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

interface Props{
    panTo:any
}



const Search = ({panTo}:Props) => {


    const [autocomplete,setAutocomplete] = useState<any>();
    
    
    
    const onLoad = (autoC:any) =>setAutocomplete(autoC);
    
    const onPlaceChanged = () =>{
        const lat = autocomplete!.getPlace().geometry.location.lat();
        const lng = autocomplete!.getPlace().geometry.location.lng();
    
        panTo({lat,lng})
    
    }
    

    return (
        <div>
             <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
             <div>
                 <input type="text" style={{position:"absolute",zIndex:13, left:"42%",outline:"none",top:"4%",background: "linear-gradient(21deg, #10abff, #1beabd)", padding: "0.7rem", borderRadius:"30px", width:"30%"}}/>
	
             </div>
            </Autocomplete>
            
        </div>
    )
}

export default Search;
