import React from 'react';
import { AllProfContainer, PlayerContainer } from './components'
import { PROFESSIONS, NOVICE_SKILL } from './CONSTANTS'

function AllProfessionsContainer ({ setProfession }) {
    return ( 
        <AllProfContainer>
            {PROFESSIONS.basic.map(item => {
                return (
                    <p key={item} onClick={() => setProfession(NOVICE_SKILL[item])}>{item}</p>
                )
            })}
            <hr/>
            {PROFESSIONS.elite.map(item => {
                return (
                    <p key={item} onClick={() => setProfession(NOVICE_SKILL[item])}>{item}</p>
                )
            })}
        </AllProfContainer>
     );
}

export default AllProfessionsContainer ;