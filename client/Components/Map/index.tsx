import React, { useCallback, useEffect, useRef, useState } from 'react';
import {GoogleMap,useJsApiLoader, Marker,InfoWindow} from '@react-google-maps/api';
import Search from '../Search';

interface Props{
    mapRef:any;
    panTo:any;
    place:any
  }
  
  const mapStyle = {
    height:'100vh',
    width:'100vw'
  }
  
  const center={
    lat:44.513332,
    lng:-88.015831
  }
  

const Map = ({mapRef,panTo,place}:Props) => {


    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
        libraries:['places']
      });
    
      
      const [selected,setSelected] = useState<any>({})
    
      const onSelect = (item:any) =>{
        setSelected(item)
      }
    
      
      
      const onMapLoad = useCallback(map=>{
        mapRef.current = map;
      },[])
    
    
    
      if (loadError) return <div>'Error loading maps'</div>
      if (!isLoaded) return <div>'Loading maps'</div>





    return (
        <div>
            <Search panTo={panTo}/>
            <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapStyle}
        center={center}
        zoom={12}
        
      >
        
       {
         place!.map((markr:any)=>{
          const lat = markr!.geometry!.location!.lat();
          const lng = markr!.geometry!.location!.lng();

         let location={lat,lng}

         let place ={...markr,location}

          return <Marker
          position={{lat,lng}}
          zIndex={5000}
          onClick={()=>onSelect(place)}
        />
         })
       }

       {
          selected?.location&&(
            <InfoWindow 
            position={selected.location}
           onPositionChanged={selected.location}
            >
             <>
                <h2>{selected.name}</h2>
                
              </>
            </InfoWindow>
          )
       }
       


      </GoogleMap>
            
            
        </div>
    )
}

export default Map;
