import styled from 'styled-components';
import { device } from '../../utils/device';

export const SliderWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:37rem;
background-color:#36a;



`;


export const SliderItems = styled.div`
display:flex; 
justify-content:space-between;
align-items:center; 
height:100%; 
width:100%;

@media ${device.mobile} {
    height:45%
    width:100%;
  }





`;

export const Header = styled.h2`
margin-top:0rem;
padding:1rem;
font-size:2.0rem;
display:flex;
justify-content:center;
background-color:#36a;
color:#fff;
cursor:pointer;

`