import React, { useEffect, useState } from 'react';

import { AppWrapper, MainContainer, SkillContainer, SideContainer } from './styled-components';
import Professions from './components/Professions'
import Experience from './components/Experience'
import SkillModifiers from './components/SkillModifiers'
import Commands from './components/Commands'
import Certifications from './components/Certifications'
import Titles from './components/Titles';
import SkillTree from './components/SkillTree'
import ActiveSkillModifiers from './components/ActiveSkillModifiers'
import ActiveCommandsAndCertifications from './components/ActiveCommandsAndCertifications'
import { SKILLS, ALL_SPECIES } from './data'

function App() {

  const [playerSkills, setPlayerSkills] = useState(() => {
    try {
      const savedPlayerSkills = localStorage.getItem("playerSkills");
      return savedPlayerSkills ? JSON.parse(savedPlayerSkills) : [];
    } catch {
      return [];
    }
  });
  const [skillPointWarning, setSkillPointWarning] = useState(false)
  const [activeSkill, setActiveSkill] = useState('combat_brawler_novice');
  const [activeProfession, setActiveProfession] = useState('combat_brawler')

  useEffect(() => {
    setTimeout(() => {
      setSkillPointWarning(false)
    }, 2500)
  }, [skillPointWarning])

  useEffect(() => {
    localStorage.setItem("playerSkills", JSON.stringify(playerSkills));
  }, [playerSkills])

  const handleProfessionChange = (newProf) => {
    setActiveProfession(newProf)
  }

  const handleActiveSkillChange = (skill) => {
    setActiveSkill(skill)
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
      setPlayerSkills([])
    } else {
      removeSkillsFromPlayer(data)
    }
  }

  const addSkillsToPlayer = (skill) => {
    const skillsToAdd = [skill];
    const queued = new Set(skillsToAdd);
    for (let i = 0; i < skillsToAdd.length; i++) {
      const preReqs = getPreReqs(skillsToAdd[i])
      for (const preReq of preReqs) {
        if (preReq !== '' && !queued.has(preReq)) {
          queued.add(preReq)
          skillsToAdd.push(preReq)
        }
      }
    }

    const filteredSkills = [...new Set(skillsToAdd.filter(item => {
      return playerSkills.indexOf(item) < 0
    }).filter(item => item !== ''))]

    const newSkillSkillPoints = filteredSkills.reduce((acc, item) => getSkillPoint(item) + acc, 0)

    if (hasSkillPoints(newSkillSkillPoints)) {
      setPlayerSkills([...playerSkills, ...filteredSkills])
    } else {
      setSkillPointWarning(true)
    }
  }
  const removeSkillsFromPlayer = (skill) => {

    const activeSkills = playerSkills
       let removeSkills = [skill]
       for (let i = 0; i < removeSkills.length; i++) {
         for (let j = 0; j < activeSkills.length; j++) {
          const activeSkill = activeSkills[j]
          const preReqs = getPreReqs(activeSkills[j]);
          const removeSkill = removeSkills[i]
          const match = preReqs.includes(removeSkill)
          if (match) removeSkills.push(activeSkill)
         }
       }
       const newSkills = activeSkills.filter((skill) => {
         return !removeSkills.includes(skill)
       })
      setPlayerSkills(newSkills)
  }

  const handleSpeciesChange = (species) => {
    const activeSkills = playerSkills
    const newSkills = activeSkills.filter((item) => {
      return !ALL_SPECIES.includes(item)
    })
    newSkills.push(species);
    setPlayerSkills(newSkills);
  }

  return (
    <AppWrapper>
      <h1 style={{'color': '#e5e7eb', 'padding': '16px', 'flexShrink': 0, 'fontSize': '1.4rem', 'letterSpacing': '0.06em', 'textTransform': 'uppercase', 'borderBottom': '1px solid rgba(148, 163, 184, 0.35)'}}>This calculator is unique to the SWG: New Beginnings server</h1>
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
          handleSpeciesChange={handleSpeciesChange}
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
    </AppWrapper>
  );
}

export default App;