import React, { useState } from 'react'
import { ALL_SKILLS_WHICH_PROFESSION, NOVICE_SKILL, PROFESSIONS, ALL_SPECIES } from '../CONSTANTS'
import { Container } from '../styled-components'

function Professions({playerSkills, handleProfessionChange}) {

  const [myProfessions, setMyProfessions] = useState(false);

  const playerProfessions = [...new Set(playerSkills.filter(item => !ALL_SPECIES.includes(item)).map(item => {
    return ALL_SKILLS_WHICH_PROFESSION[item]
  }))].sort()

  const getProfessionId = (prof) => {
    return NOVICE_SKILL[prof]
  }

  return (
    <Container>
      <h4 className="switch" onClick={() => setMyProfessions(() => !myProfessions)}>
        {myProfessions ? "My Professions" : "All Professions"}
      </h4>
      <div className="innerContainer professions">
        {myProfessions ? 
          playerProfessions.map(item => {
            return  <button key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>>> {item}</button>
           })
           :
           <>
            {PROFESSIONS.basic.map(item => {
            return  <button key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</button>
           })}
           <hr />
           {PROFESSIONS.elite.map(item => {
            return  <button key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</button>
           })}
           <hr />
           {PROFESSIONS.forceSensitive.map(item => {
            return  <button key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</button>
           })}
           <hr />
           {PROFESSIONS.jedi.map(item => {
            return  <button key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</button>
           })}
           </>
        }
      </div>
    </Container>
  )
}

export default Professions