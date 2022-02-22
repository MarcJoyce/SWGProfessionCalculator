import React from 'react';
import { BoxContainer, PlayerContainer } from './components';
import { EXPERIENCE_TITLES } from './CONSTANTS';

function ExperienceContainer({player}) {
    
    const experienceTitles = Object.keys(player["experience"]).filter(item => item !== "");
    const experienceTitlesWithProperName = experienceTitles.map(item => {
        return EXPERIENCE_TITLES[item]
    })    

    return (
        <BoxContainer>
            <h6>Experience</h6>
            <div className="boxContainer">
                {experienceTitles.sort().map(item => {
                return (
                    <div key={item} className="indPlayerContainer">
                        <p>{EXPERIENCE_TITLES[item]}</p>
                        <p>+{player["experience"][item].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                )
            })}
            </div>
        </BoxContainer>
     );
}

export default ExperienceContainer;