import React from 'react'
import { Container } from '../styled-components'
import { SKILLS } from '../CONSTANTS'

function Titles({playerSkills}) {

    const playerTitles = playerSkills.map(item => {
        return SKILLS[item].title
    }).filter(item => item !== "").sort()

    return (
        <Container>
            <h4>Titles</h4>
            <div className="innerContainer">
                {playerTitles.map(item => <p key={item}>{item}</p>)}
            </div>
        </Container>
      )
    }
    

export default Titles