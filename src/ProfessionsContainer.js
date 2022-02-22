import React from 'react';
import { ProfsBoxContainer } from './components'
import { ALL_SKILLS_WHICH_PROFESSION, NOVICE_SKILL } from './CONSTANTS'

function ProfessionsBoxContainer ({player, setProfession}) {

    const profsFromSkills = player["activeSkillIds"].map(item => {
        return ALL_SKILLS_WHICH_PROFESSION[item]
    })

    const uniqueProfs = [...new Set(profsFromSkills)]

    const handleOnClick = (newProf) => {
        console.log(newProf)
        setProfession(newProf)
    }

    return ( 
        <ProfsBoxContainer>
            {uniqueProfs.sort().map(item => {
                return (
                    <p key={item} onClick={() => handleOnClick(NOVICE_SKILL[item])}>{item}</p>
                )
            })}
        </ProfsBoxContainer>
     );
}

export default ProfessionsBoxContainer;