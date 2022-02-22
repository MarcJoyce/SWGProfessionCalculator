import React from 'react'
import { BoxContainer } from './components'

function Skills ({player}) {

    const commands = player["commands"].sort();

    return ( 
        <BoxContainer>
            <h6>Skills</h6>
            {commands.map(item => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
        </BoxContainer>
     );
}

export default Skills ;