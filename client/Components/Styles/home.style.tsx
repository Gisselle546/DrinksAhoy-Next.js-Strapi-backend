import styled from 'styled-components';
import { device } from '../../utils/device';

export const HeroContainer = styled.div`

    background: url(/Hero.jpeg) center / cover ;
    height:100vh;
    width:100vw;
    margin-top:-1.4rem;


    @media ${device.mobile} {
        
        background: url(/Hero.jpeg) center left / cover ;
      }
    
      
   




`;

