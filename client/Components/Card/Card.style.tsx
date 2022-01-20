import styled from 'styled-components';
import { device } from '../../utils/device';




export const MainContainer = styled.div`
display:flex; 
justify-content:center; 
height:30rem;
@media ${device.mobile} {
  display:flex;
  flex-direction:column;
  align-items:center;      
  
}



`;



export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  width:50%;
  text-align: center;
  height:100%;


  @media ${device.mobile} {
   width:80%;
   border: 2px solid green;
     
    
  }



 `;

export const DrinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  width:50%;
  text-align: center;
  height:50%;
`;



export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background: url(${props => props.background}) center /cover;
  height:100%;
  width:50%;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
  @media ${device.mobile} {
    margin:0px;
    
  }
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color:#fff;

  @media ${device.mobile} {
    display:flex;
    justify-content:center;
    
     
   }
  
 
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;

  @media ${device.mobile} {
    display:flex;
    justify-content:flex-start;
    margin-left:1rem;
      
     
   }


`;


export const WineCardImage = styled.div<{ background: string }>`
  grid-area: image;
  background: url(${props => props.background})  center/cover;
  height:100%;
  width:90%;
`;
