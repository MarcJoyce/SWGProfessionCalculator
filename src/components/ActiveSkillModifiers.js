import React from 'react'
import { Container } from '../styled-components'
import { SKILLS, SKILL_MOD } from '../CONSTANTS'

function ActiveSkillModifiers({activeSkill}) {

    const activeSkillModifiers = activeSkill && SKILLS[activeSkill].skillModifiers

    const sortedMods = Object.entries(activeSkillModifiers).map(item => {
        return [item[0] = SKILL_MOD[item[0]] || "", item[1]]
      }).filter(item => item[0] !== '').filter(item => item[1] > 0).sort()

  return (
    <Container className="activeSkillModifiers">
        <h2>Skill Modifiers</h2>
        <div className="innerContainer">
            {sortedMods.map(item => {
            return (
            <div className="row" key={item}>
                <p>{item[0]}</p>
                <p>+{item[1]}</p>
            </div>
            )
            })}
        </div>
    </Container>
  )
}

export default ActiveSkillModifiers