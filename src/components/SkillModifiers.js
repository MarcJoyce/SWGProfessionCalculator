import React from 'react'
import { Container } from '../styled-components'
import { SKILLS, SKILL_MOD } from '../CONSTANTS'

function SkillModifiers({playerSkills}) {

  const playerSkillModifiers = playerSkills.map(item => {
    return SKILLS[item].skillModifiers
  })

  const filteredMods = {};

  playerSkillModifiers.forEach(skill => {
    Object.entries(skill).forEach(mod => {
      const [key, value] = mod
      if (filteredMods[key]) {
        filteredMods[key] += value
      } else {
        filteredMods[key] = value
      }
    })
  })

  const sortedMods = Object.entries(filteredMods).map(item => {
    return [item[0] = SKILL_MOD[item[0]] || "", item[1]]
  }).filter(item => item[0] !== '').filter(item => item[1] > 0).sort()
  
  return (
    <Container>
      <h4>My Skill Modifiers</h4>
      <div className='innerContainer'>
        {sortedMods.map(item => {
          return (
          <div className="row" key={item}>
            <p>
              {item[0]}
              {item[0].indexOf("_combat_difficulty") > 0 && ` (CL)`}
              </p>
            <p>+{item[1]}
            {item[0].indexOf("_combat_difficulty")>0 &&` (${Math.floor(Math.min(25,item[1]/100+1))})`}</p>
          </div>
          )
        })}
      </div>
    </Container>
  )
}

export default SkillModifiers