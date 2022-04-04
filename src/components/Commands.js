import React from 'react'
import { Container } from '../styled-components'
import { COMMAND_NAME, SKILLS } from '../CONSTANTS'

function Commands({playerSkills}) {
    
    const playerCommands = [...new Set([].concat(...playerSkills.map(item => SKILLS[item].commands)))]

    const filteredCommands = playerCommands.filter(item => {
        return item.indexOf("cert_") < 0
    }).map(item => COMMAND_NAME[item.toLowerCase()]).sort().filter(item => item !== undefined)

    return (
        <Container>
            <h4>Commands</h4>
            <div className="innerContainer">
                {filteredCommands.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
        </Container>
      )
    }
    

export default Commands