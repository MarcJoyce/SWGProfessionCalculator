import React from 'react';
import { BoxContainer } from './components';


function Certifications({player}) {

    const certifications = player["certifications"].sort();

    return ( 
        <BoxContainer>
            <h6>Certifications</h6>
            {certifications.map(item => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
        </BoxContainer>
     );
}

export default Certifications;