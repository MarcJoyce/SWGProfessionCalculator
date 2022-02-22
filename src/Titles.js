import React from 'react';
import { BoxContainer } from './components';


function Titles({player}) {

    const titles = player["titles"].filter(item => item !== "").sort();

    return ( 
        <BoxContainer>
            <h6>Titles</h6>
            {titles.map(item => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
        </BoxContainer>
     );
}

export default Titles;