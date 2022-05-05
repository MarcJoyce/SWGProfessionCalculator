import React, { useEffect, useState } from 'react';

import { MainContainer, SkillContainer, SideContainer } from './styled-components';
import Professions from './components/Professions'
import Experience from './components/Experience'
import SkillModifiers from './components/SkillModifiers'
import Commands from './components/Commands'
import Certifications from './components/Certifications'
import Titles from './components/Titles';
import SkillTree from './components/SkillTree'
import ActiveSkillModifiers from './components/ActiveSkillModifiers'
import ActiveCommandsAndCertifications from './components/ActiveCommandsAndCertifications'
import { SKILLS } from './CONSTANTS'

function App() {

  const [playerSkills, setPlayerSkills] = useState(() => {
    const savedPlayerSkills = localStorage.getItem("playerSkills");
    const initialValue = JSON.parse(savedPlayerSkills);
    
    return initialValue || [];
  });
  const [skillPointWarning, setSkillPointWarning] = useState(false)
  const [preReqWarning, setPreReqWarning] = useState(false)
  const [activeSkill, setActiveSkill] = useState('combat_brawler_novice');
  const [activeProfession, setActiveProfession] = useState('combat_brawler')

  console.log(activeSkill)

  useEffect(() => {
    setTimeout(() => {
      setPreReqWarning(false)
    }, 2500)
  }, [preReqWarning])

  useEffect(() => {
    setTimeout(() => {
      setSkillPointWarning(false)
    }, 2500)
  }, [skillPointWarning])

  useEffect(() => {
    localStorage.setItem("playerSkills", JSON.stringify(playerSkills));
  }, [playerSkills])

  useEffect(() => {
    
  }, [])

  const handleProfessionChange = (newProf) => {
    setActiveProfession(() => newProf)
  }

  const handleActiveSkillChange = (skill) => {
    setActiveSkill(() => skill)
  }

  const getSkillPoint = (skill) => {
    return SKILLS[skill].skillPoints
  }

  const hasSkillPoints = (sp) => {
    const MAX_SKILL_POINTS = 250;
    const playerSkillPointsUsed = playerSkills.reduce((acc, item) => getSkillPoint(item) + acc, 0)
    return (MAX_SKILL_POINTS - playerSkillPointsUsed - sp) > -1
  }

  const getPreReqs = (skill) => {
    return SKILLS[skill].preReqs
  }

  const handleSkillChange = ({action, data}) => {
    if (action === 'add') {
      addSkillsToPlayer(data)
    } else if (action === 'reset') {
      setPlayerSkills(() => [])
    } else {
      removeSkillsFromPlayer(data)
    }
  }

  const addSkillsToPlayer = (skill) => {
    let skillsToAdd = [skill];
    for (let i = 0; i <= skillsToAdd.length; i++) {
      const preReqs = getPreReqs(skillsToAdd[i])
      skillsToAdd = [...skillsToAdd, ...preReqs]
      if (skillsToAdd[skillsToAdd.length - 1] === '') {
        i+= skillsToAdd.length
      }
    }

    const filteredSkills = [...new Set(skillsToAdd.filter(item => {
      return playerSkills.indexOf(item) < 0
    }).filter(item => item !== ''))]

    const newSkillSkillPoints = filteredSkills.reduce((acc, item) => getSkillPoint(item) + acc, 0)

    if (hasSkillPoints(newSkillSkillPoints)) {
      const currentSkills = playerSkills
      const newSkills = [...currentSkills, ...filteredSkills]
  
      setPlayerSkills(() => newSkills)
    } else {
      setSkillPointWarning(() => true)
    }
  }

  const isPreReq = (skill) => {
    const activePreReqs = playerSkills.map(item => SKILLS[item].preReqs)

    const merge = activePreReqs.reduce((acc, item) => {
      return [...acc, ...item]
    })

    return merge.indexOf(skill) > -1
 
  }

  const removeSkillsFromPlayer = (skill) => {
     if (isPreReq(skill)) {
       setPreReqWarning(() => true)
     } else {
       const activeSkills = playerSkills
       const newSkills = activeSkills.filter(item => {
         return item !== skill
       })
       setPlayerSkills(() => newSkills)
     }
  }

  return (
    <MainContainer>
      <SideContainer>
        <Professions 
          playerSkills={playerSkills}
          handleProfessionChange={handleProfessionChange}/>
        <Experience 
          playerSkills={playerSkills}/>
        <SkillModifiers 
          playerSkills={playerSkills}/>
      </SideContainer>
      <SkillContainer>
        <SkillTree 
          preReqWarning={preReqWarning}
          skillPointWarning={skillPointWarning}
          playerSkills={playerSkills}
          activeProfession={activeProfession}
          handleProfessionChange={handleProfessionChange}
          handleActiveSkillChange={handleActiveSkillChange}
          handleSkillChange={handleSkillChange}
        />
        <ActiveSkillModifiers activeSkill={activeSkill}/>
        <ActiveCommandsAndCertifications activeSkill={activeSkill}/> 
      </SkillContainer>
      <SideContainer>
        <Commands 
          playerSkills={playerSkills}/>
        <Certifications 
          playerSkills={playerSkills} />
        <Titles
          playerSkills={playerSkills} />
      </SideContainer>
    </MainContainer>
  );
}

export default App;