import React, { useState, useMemo } from 'react'
import { ALL_SKILLS_WHICH_PROFESSION, NOVICE_SKILL, PROFESSIONS } from '../CONSTANTS'
import { Container } from '../styled-components'

function Professions({playerSkills, handleProfessionChange}) {

  const [myProfessions, setMyProfessions] = useState(true);

  const playerProfessions = [...new Set(playerSkills.map(item => {
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
            return  <a key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>>> {item}</a>
           })
           :
           <>
            {PROFESSIONS.basic.map(item => {
            return  <a key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</a>
           })}
           <hr />
           {PROFESSIONS.elite.map(item => {
            return  <a key={item} onClick={() => handleProfessionChange(getProfessionId(item))}>{playerProfessions.indexOf(item) > -1 ? `>> ${item}` : item}</a>
           })}
           </>
        }
      </div>
    </Container>
  )
}

export default Professions