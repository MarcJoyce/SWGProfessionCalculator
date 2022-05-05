import React, { useEffect, useState } from 'react'
import { SKILL_TITLE} from '../CONSTANTS'
import { SkillBoxContainer } from '../styled-components'


function SkillBox({data, isActive, handleActiveSkillChange, handleSkillChange}) {

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    handleActiveSkillChange(data)
  },[isHovered])

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

    setIsHovered(true)
  }

  return (
    <SkillBoxContainer active={isActive} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => handleSkillChangeClick(data)}>
        <p>{SKILL_TITLE[data]}</p>
    </SkillBoxContainer>
  )
}

export default SkillBox