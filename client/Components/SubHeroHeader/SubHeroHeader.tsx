import React from 'react'
import { HeroSecond, HeroHeaderContainer, HeroHeader, SubHeader } from './SubHeroHeader.style';





const SubHeroHeader = () => {
    return (
        <HeroSecond>
            <HeroHeaderContainer>
                <HeroHeader>Share a Drink </HeroHeader>
            </HeroHeaderContainer>
            <SubHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere diam dui, a pharetra turpis tristique sit amet. Praesent ut facilisis ipsum.</SubHeader>
        </HeroSecond>
    )
}

export default SubHeroHeader;
