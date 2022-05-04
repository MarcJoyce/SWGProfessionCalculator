import React, { useEffect, useState } from 'react'
import { SKILL_TITLE, SKILLS, EXPERIENCE_TITLES} from '../CONSTANTS'
import { SkillBoxContainer } from '../styled-components'


function SkillBox({data, isActive, handleActiveSkillChange, handleSkillChange}) {

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    handleActiveSkillChange(data)
  },[isHovered, data, handleActiveSkillChange, handleSkillChange])

  const handleSkillChangeClick = (skill) => {
    if (isActive) {
      handleSkillChange({
        'action' : 'remove',
        'data' : skill
      })
    } else {
      handleSkillChange({
        'action' : 'add',
        'data' : skill
      })
    }
  }


  return (
    <SkillBoxContainer active={isActive} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => handleSkillChangeClick(data)}>
        <p>{SKILL_TITLE[data]}</p>
        {SKILLS[data].xp.cost !== 0 && <p>{SKILLS[data].xp.cost}, {EXPERIENCE_TITLES[SKILLS[data].xp.id]}</p>}
    </SkillBoxContainer>
  )
}

export default SkillBox