import React from 'react'
import SkillBox from './SkillBox'
import Link from './Link'

function SkillBranch({data, playerSkills, handleProfessionChange, handleActiveSkillChange, handleSkillChange}) {

    const links = data.links
    const skills = data.skills

  return (
    <div className="skillBranch">
        <div className="linkContainer">
          {links.map(item => <Link key={item} data={item} handleProfessionChange={handleProfessionChange}/>)}
        </div>
        {skills.map(item => <SkillBox key={item} data={item} isActive={playerSkills.indexOf(item) > -1} handleActiveSkillChange={handleActiveSkillChange}  handleSkillChange={handleSkillChange}/>)}
    </div>
  )
}

export default SkillBranch