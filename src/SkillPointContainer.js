import React from 'react';
import {PlayerContainer, SkillPointBoxContainer} from './components'

function SkillPointContainer ({player}) {
    
    return ( 
        <SkillPointBoxContainer>
            {player["skillPoints"]} / 250
        </SkillPointBoxContainer>
     );
}

export default SkillPointContainer ;