import React from 'react';
import { BoxContainer } from './components';

import { SKILLS, SKILL_MOD } from './CONSTANTS'

function Mods({activeSkill}) {

    const skillModifiers = activeSkill !== "" ? Object.entries(SKILLS[activeSkill]["skillModifiers"]) : "";
    
    const filteredSkillModifiers = skillModifiers && skillModifiers.filter((item) => {
            if (item[0] in SKILL_MOD) { 
                return [item[0] = SKILL_MOD[item[0]], item[1]]
            } 
    }).sort((a, b) => {
        return a[0].localeCompare(b[0])
    })

    return (
        <BoxContainer>
            <h6>Skill Modifiers</h6>
            <div className="boxContainer">{filteredSkillModifiers && filteredSkillModifiers.map(item => {
                return (
                    <div key={item} className="indPlayerContainer">
                        <p>{item[0]}</p>
                        <p>+{item[1]}</p>
                    </div>
                )
            })}
            </div>
        </BoxContainer>
    );
}

export default Mods;