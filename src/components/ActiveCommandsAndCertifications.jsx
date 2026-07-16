import React from 'react'
import { Container } from '../styled-components'
import { COMMAND_NAME, SKILLS } from '../CONSTANTS'

function ActiveCommandsAndCertifications({activeSkill}) {

    const activeSkillCommands = activeSkill && SKILLS[activeSkill].commands

    const sortedCommands = activeSkillCommands && activeSkillCommands.map(item => COMMAND_NAME[item.toLowerCase()] || '').filter(item => item !== '').sort()

  return (
    <Container className="activeSkillCommands">
        <h2>Commands and Certifications</h2>
        <div className="innerContainer">
            {sortedCommands.map(item => {
            return (
            <div className="row" key={item}>
                <p>{item}</p>
            </div>
            )
            })}
        </div>
    </Container>
  )
}

export default ActiveCommandsAndCertifications