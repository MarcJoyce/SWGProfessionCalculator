import React from 'react'
import { Container } from '../styled-components'
import { EXPERIENCE_TITLES, SKILLS } from '../CONSTANTS'

function Experience({playerSkills}) {

  const playerExperience = playerSkills.map(item => {
    return SKILLS[item].xp
  })

  const filteredExperience = {};

  playerExperience.forEach(skill => {
    if (filteredExperience[skill['id']]) {
      filteredExperience[skill['id']] += skill['cost']
    } else {
      filteredExperience[skill['id']] = skill['cost']
    }
  });

  const sortedExperience = Object.entries(filteredExperience).map(item => {
    return [item[0] = EXPERIENCE_TITLES[item[0]], item[1]]
  }).filter(item => item[1] > 0).sort()

  return (
    <Container>
      <h4>My Experience</h4>
      <div className="innerContainer">
        {sortedExperience.map(item => {
          return (
            <div className="row" key={item}>
              <p>{item[0]}</p>
              <p>+{item[1].toLocaleString("en-US")}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Experience