import React, { useState, useEffect } from 'react';
import { BranchBoxContainer } from './components'
import { SKILL_TITLE } from './CONSTANTS'

function BranchBox ({data, player, handlePlayerChange, handleActiveSkill}) {
    
    const [active, setActive] = useState(false);

    useEffect(() => {
        const activeSkillsList = player["activeSkillIds"]
        const isActive = activeSkillsList.indexOf(data) > -1;

        setActive(isActive)

    },[player["activeSkillIds"], data])

    const handleClick = () => {
        if (active) {
            handlePlayerChange({
                "action" : "delete",
                "data" : data
            })
        } else {
            handlePlayerChange({
                "action": "add",
                "data" : data
            })
        }

        handleActiveSkill(data)
    }

    return ( 
        <BranchBoxContainer active={active} onClick={handleClick}>
            {/* <p>{data}</p> */}
            <p>{SKILL_TITLE[data]}</p>
        </BranchBoxContainer>
     );
}

export default BranchBox ;