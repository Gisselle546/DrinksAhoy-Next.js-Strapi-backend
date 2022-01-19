import styled from 'styled-components';


export const Content = styled.div`
    display:flex;
    background: url(/wine.jpeg)  ;
    height: 50vh;
    justify-content:center;
    width:100%;
`;

export const WineWrapper = styled.div`
min-height:50rem;
display:grid;
grid-template-columns: repeat(3, 1fr);
gap:14px;
`;

export const WineHeader = styled.h2`
font-size:2.3rem;
text-align:center;
`