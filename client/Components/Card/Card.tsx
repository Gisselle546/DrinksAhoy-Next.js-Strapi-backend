import React from 'react';
import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
    WineCardImage,
    MainContainer
  } from "./Card.style";

interface Props{
    data:any
}

const Card = ({data}:Props) => {

    console.log(data.attributes);

    return (
        <MainContainer>
           <CardWrapper>
                 {data.attributes.abv?(
                 <CardImage background={data.attributes.image}/>
                ):(
                  <WineCardImage background={data.attributes.image}/>
                )
                } 
                
                <CardTextWrapper> 
               
                <CardTextTitle>{data.attributes.title}</CardTextTitle>
                <CardTextBody>
                    {data.attributes.description}
                </CardTextBody>
                {
                  data.attributes.abv?(
                <CardTextTitle>Abv: {data.attributes.abv}</CardTextTitle>
                  ):(
                    [
                    <CardTextTitle>{data.attributes.brand}</CardTextTitle>,
                    <CardTextTitle>{data.attributes.year}</CardTextTitle>
                    ]
                  )
                }
                </CardTextWrapper>
            </CardWrapper>
        </MainContainer>
    )
}

export default Card;
