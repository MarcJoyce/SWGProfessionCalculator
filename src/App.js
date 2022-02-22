import React, { useState } from 'react';

import { AllProfContainer, MainContainer, PlayerContainer, PlayerModContainer } from './components';
import Profession from './Profession';
import ProfessionsBox from './ProfessionsBox';
import Skills from './Skills'
import Certifications from './Certifications';
import Titles from './Titles'
import SkillModsContainer from './SkillModsContainer'
import ExperienceContainer from './ExperienceContainer'
import { SKILLS } from './CONSTANTS'

function App() {

  const [player, setPlayer] = useState({
    "skillPoints" : 250,
    "experience" : {},
    "commands" : [],
    "skillModifiers" : {},
    "activeSkillIds" : [],
    "certifications" : [],
    "draftSchematics" : [],
    "titles" : []
  });

  const [activeProfession, setActiveProfession] = useState('combat_brawler');

  const [activeSkill, setActiveSkill] = useState("")

  const handleProfessionChange = (newProf) => {
    setActiveProfession(() => newProf);
  }

  const handleActiveSkill = (newSkill) => {
    setActiveSkill(() => newSkill);
  }

  const handlePlayerChange = ({action, data}) => {
    if (action === "delete") deleteFromPlayer(data)
    if (action === "add") addToPlayer(data)
  }

  
  return (
    <MainContainer>
      <PlayerContainer>
        <ProfessionsBox 
          player={player} 
          handleProfessionChange={handleProfessionChange}
        />
        <ExperienceContainer 
        player={player}/>
        <SkillModsContainer 
        player={player}/>
      </PlayerContainer>
      <Profession 
        profession={activeProfession} 
        handleProfessionChange={handleProfessionChange}
        player={player}
        handlePlayerChange={handlePlayerChange}
        activeSkill={activeSkill}
        handleActiveSkill={handleActiveSkill}
      />
      <PlayerModContainer>
        <Skills
          player={player}
        />
        <Certifications 
          player={player}
          />
          <Titles 
            player={player}
            />
      </PlayerModContainer>
    </MainContainer>
  );
}

export default App;
