import React from 'react';
import { BoxContainer } from './components';
import { SKILLS } from './CONSTANTS'

function PlayerSkills({activeSkill}) {

    const commands = activeSkill && SKILLS[activeSkill]["commands"]
    
    const filteredCommands = commands && commands.filter(item => {
        return typeof item === "string" && item.indexOf("cert_") < 0
    });

    return (
        <BoxContainer>
            <h6>Commands</h6>
            <div className="boxContainer">{filteredCommands && filteredCommands.map(item => {
                return (
                    <div key={item} className="indPlayerContainer">
                        <p>{item}</p>
                    </div>
                )
            })}
            </div>
        </BoxContainer>
    );
}

export default PlayerSkills;