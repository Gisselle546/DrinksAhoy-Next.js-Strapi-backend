import styled from 'styled-components';
import { device } from '../../utils/device';


export const Content = styled.div`
display:flex;
height: 50vh;
width:100%;
justify-content:center;
background: url(/beerdrinking.jpg) top right/cover;



`;

export const BeerHeader = styled.h2`
font-size:2.3rem;
text-align:center;
`
export const BeerWrapper = styled.div`
min-height:50rem;
display:grid;
grid-template-columns: repeat(3, 1fr);
gap:14px;


@media ${device.mobile} {
        
    display:flex;
    flex-direction:column;
   }
 




`;
