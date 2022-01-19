import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    background-color:#36a;
    width:25%;
    z-index:100;
    position:fixed;
    box-shadow:0 0 5px #665;
    margin-top:3rem;
    
  

`;

export const HamburgerWrapper = styled.div`
position:fixed;
margin:1rem;

`;


export const Xspot = styled.div`

width:80px;
`

export const ListItems = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
height:60vh
justify-content:space-between;
width:70%;
align-content:center;


`;


export const ListItem = styled.li`
color:#fff;
font-size:1.2rem;
cursor:pointer;
`;

