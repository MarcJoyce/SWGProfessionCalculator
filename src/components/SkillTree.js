import React from 'react'
import { Container } from '../styled-components'
import { ALL_PROFESSIONS, SKILL_TITLE, SKILLS } from '../CONSTANTS'
import SkillBranch from './SkillBranch'
import SkillBox from './SkillBox'
import Link from './Link'

function SkillTree({playerSkills, handleProfessionChange, handleActiveSkillChange, activeProfession, handleSkillChange, skillPointWarning}) {

  const profession = ALL_PROFESSIONS[activeProfession]
  const {branch_1, branch_2, branch_3, branch_4} = profession
  const playerSkillPoints = playerSkills.map(item => SKILLS[item].skillPoints).reduce((acc, item) => item + acc, 0)

  return (
    <Container className="skillTree">
        <h2>{SKILL_TITLE[activeProfession]}</h2>
        {skillPointWarning ? <div className="skillPointWarning">NOT ENOUGH SKILLPOINTS</div> : ''}
        <div className="skillPoints">
          <div>
            SP: 
            <span>{250 - playerSkillPoints}</span> 
            /
            <span>250</span>
          </div>
          <div>
            <button onClick={() => handleSkillChange({'action' : 'reset'})}>Reset Char</button>
          </div>
        </div>

        <div className="linkContainer">{profession.master_links.map(item => <Link key={item} data={item} handleProfessionChange={handleProfessionChange}/>)}</div>
        
        <SkillBox data={profession.master} isActive={playerSkills.indexOf(profession.master) > -1} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>

        <div className="skillBranches">
          <SkillBranch data={branch_1} playerSkills={playerSkills} handleProfessionChange={handleProfessionChange} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>
          <SkillBranch data={branch_2} playerSkills={playerSkills} handleProfessionChange={handleProfessionChange} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>
          <SkillBranch data={branch_3} playerSkills={playerSkills} handleProfessionChange={handleProfessionChange} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>
          <SkillBranch data={branch_4} playerSkills={playerSkills} handleProfessionChange={handleProfessionChange} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>
        </div>
        <SkillBox data={profession.novice} isActive={playerSkills.indexOf(profession.novice) > -1} handleActiveSkillChange={handleActiveSkillChange} handleSkillChange={handleSkillChange}/>

        <div className="linkContainer">{profession.novice_links.map(item => <Link key={item} data={item}  handleProfessionChange={handleProfessionChange} />)}</div>
    </Container>
  )
}

export default SkillTree