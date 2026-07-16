import React, { useEffect, useState } from 'react';
import { Container } from '../styled-components';
import {
  ALL_PROFESSIONS,
  SKILL_TITLE,
  SKILLS,
  ALL_SPECIES,
  SPECIES_TITLE
} from '../data';
import SkillBranch from './SkillBranch';
import SkillBox from './SkillBox';
import Link from './Link';

function SkillTree({
  playerSkills,
  handleProfessionChange,
  handleActiveSkillChange,
  activeProfession,
  handleSkillChange,
  skillPointWarning,
  handleSpeciesChange
}) {
  const profession = ALL_PROFESSIONS[activeProfession];
  const { branch_1, branch_2, branch_3, branch_4 } = profession;
  const playerSkillPoints = playerSkills
    .map((item) => SKILLS[item].skillPoints)
    .reduce((acc, item) => item + acc, 0);

  const [speciesSelected, setSpeciesSelected] = useState('');

  useEffect(() => {
    const species = playerSkills.find((item) => ALL_SPECIES.includes(item));
    if (species) setSpeciesSelected(species);
  }, [playerSkills]);

  return (
    <Container className='skillTree'>
      <select
        name='species'
        id='species'
        value={speciesSelected}
        onChange={(e) => {
          handleSpeciesChange(e.target.value);
        }}>
        <option value='' disabled>
          Species:
        </option>
        {ALL_SPECIES.map((item) => {
          return (
            <option key={item} value={item}>{SPECIES_TITLE[item]}</option>
          )
        })}
      </select>
      <h2>{SKILL_TITLE[activeProfession]}</h2>
      {skillPointWarning ? (
        <div className='skillPointWarning'>NOT ENOUGH SKILLPOINTS</div>
      ) : (
        ''
      )}
      <div className='skillPoints'>
        <div>
          SP:
          <span>{250 - playerSkillPoints}</span>/<span>250</span>
        </div>
        <div>
          <button onClick={() => handleSkillChange({ action: 'reset' })}>
            Reset Char
          </button>
        </div>
      </div>

      <div className='linkContainer'>
        {profession.master_links.map((item) => (
          <Link
            key={item}
            data={item}
            handleProfessionChange={handleProfessionChange}
          />
        ))}
      </div>

      <SkillBox
        data={profession.master}
        isActive={playerSkills.indexOf(profession.master) > -1}
        handleActiveSkillChange={handleActiveSkillChange}
        handleSkillChange={handleSkillChange}
      />

      <div className='skillBranches'>
        <SkillBranch
          data={branch_1}
          playerSkills={playerSkills}
          handleProfessionChange={handleProfessionChange}
          handleActiveSkillChange={handleActiveSkillChange}
          handleSkillChange={handleSkillChange}
        />
        <SkillBranch
          data={branch_2}
          playerSkills={playerSkills}
          handleProfessionChange={handleProfessionChange}
          handleActiveSkillChange={handleActiveSkillChange}
          handleSkillChange={handleSkillChange}
        />
        <SkillBranch
          data={branch_3}
          playerSkills={playerSkills}
          handleProfessionChange={handleProfessionChange}
          handleActiveSkillChange={handleActiveSkillChange}
          handleSkillChange={handleSkillChange}
        />
        <SkillBranch
          data={branch_4}
          playerSkills={playerSkills}
          handleProfessionChange={handleProfessionChange}
          handleActiveSkillChange={handleActiveSkillChange}
          handleSkillChange={handleSkillChange}
        />
      </div>
      <SkillBox
        data={profession.novice}
        isActive={playerSkills.indexOf(profession.novice) > -1}
        handleActiveSkillChange={handleActiveSkillChange}
        handleSkillChange={handleSkillChange}
      />

      <div className='linkContainer'>
        {profession.novice_links.map((item) => (
          <Link
            key={item}
            data={item}
            handleProfessionChange={handleProfessionChange}
          />
        ))}
      </div>
    </Container>
  );
}

export default SkillTree;
