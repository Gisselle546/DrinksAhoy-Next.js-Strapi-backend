import React, { useCallback, useEffect, useRef, useState } from 'react'
import List from '../../Components/List';
import Map from '../../Components/Map';
import { useRouter } from 'next/router'
import { ResultWrappers } from '../../Components/Styles/results.style';
import toast from 'react-hot-toast'


let service:any;

const Results = () => {

  const router = useRouter()

    const mapRef = useRef<any>();
    const [placeA,setPlace] = useState<any>([])
     
    

    useEffect(() => {
      if( window.innerWidth < 600){
        toast.success("Please Use a Larger Device to use this Feature")
        router.push("/");
      }
      
    },[window.innerWidth])
    
     
     const panTo = useCallback(({lat,lng})=>{
      mapRef!.current!.panTo({lat,lng});
      mapRef!.current.setZoom(15);
      let map = mapRef.current;
  
    let request = {
      location:{lat,lng},
      radius:"500",
      type:["liquor_store"]
    };
  
    service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request,callback);
  
    function callback(results:any,status:any){
      if(status===google.maps.places.PlacesServiceStatus.OK){
    
        setPlace(results);
      }
    }
},[])





    return (
        <>
        <ResultWrappers>
        <div style={{marginTop:"5rem"}}>
            <List place={placeA}/>
          </div>
        <div>
            <Map panTo={panTo} mapRef={mapRef} place={placeA}/>
        </div>

        
        </ResultWrappers>
        </>
    )
}

export default Results;
