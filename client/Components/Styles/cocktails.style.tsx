import styled from 'styled-components';
import { device } from '../../utils/device';


export const Content = styled.div`
    display:flex;
    background: url(/cocktails.jpg)  left center/cover;
    height: 20vh;
    justify-content:center;
    width:100%;
`;

export const DrinksWrapper = styled.div`
min-height:50rem;
display:grid;
grid-template-columns: repeat(3, 1fr);
gap:14px;

@media ${device.mobile} {
        
   display:flex;
   flex-direction:column;
  }




`;

export const DrinksHeader = styled.h2`
font-size:2.3rem;
text-align:center;
`
