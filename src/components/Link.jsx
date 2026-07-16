import React from 'react'
import { SKILL_TITLE } from '../CONSTANTS'

function Link({data, handleProfessionChange}) {

  const handleClick = (prof) => {
    handleProfessionChange(prof)
  }

  return (
    <p onClick={() => handleClick(data)}>{data === "" ? "" : `To: ${SKILL_TITLE[data]}`}</p>
  )
}

export default Link