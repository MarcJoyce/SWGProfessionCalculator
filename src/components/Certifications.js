import React from 'react'
import { Container } from '../styled-components'
import { COMMAND_NAME, SKILLS } from '../CONSTANTS'

function Certifications({playerSkills}) {

    const playerCerts = [...new Set([].concat(...playerSkills.map(item => SKILLS[item].commands)))]

    const filteredCerts = playerCerts.filter(item => {
        return item.indexOf("cert_") > -1
    }).map(item => COMMAND_NAME[item.toLowerCase()]).sort()



  return (
    <Container>
        <h4>Certifications</h4>
        <div className="innerContainer">
                {filteredCerts.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
    </Container>
  )
}

export default Certifications