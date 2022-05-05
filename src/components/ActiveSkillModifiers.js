import React from 'react'
import { Container } from '../styled-components'
import { SKILLS, SKILL_MOD, EXPERIENCE_TITLES } from '../CONSTANTS'

function ActiveSkillModifiers({activeSkill}) {

    const activeSkillModifiers = activeSkill && SKILLS[activeSkill].skillModifiers

    const sortedMods = Object.entries(activeSkillModifiers).map(item => {
        return [item[0] = SKILL_MOD[item[0]] || "", item[1]]
      }).filter(item => item[0] !== '').filter(item => item[1] > 0).sort()

      const xp = SKILLS[activeSkill].xp.cost;

      const xpType = EXPERIENCE_TITLES[SKILLS[activeSkill].xp.id];

  return (
    <Container className="activeSkillModifiers">
        <h2>Skill Modifiers</h2>
        {xp !== 0 ? <p>This skill box requires {xp.toLocaleString()} of {xpType} xp.</p> : <p>This skill box required no xp</p>}
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