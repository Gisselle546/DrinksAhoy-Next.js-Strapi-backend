import styled from 'styled-components';
import { device } from '../../utils/device';



export const FooterWrapper = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
background-color:#2e2d2b;
height:6rem; 


`; 

export const ListItem = styled.li`
margin-left:30px;
cursor:pointer;
color:#fff;
background-color:#2e2d2b;
@media ${device.mobile} {
        
    margin-left:0px;
    margin-right:5px;
  }


`;

