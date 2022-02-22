import React, { useEffect, useState } from 'react';
import { BoxContainer, ProfessionBoxOptions } from './components'
import ProfBoxSelection from './ProfBoxSelection'
import ProfessionsContainer from './ProfessionsContainer'
import AllProfessionsContainer from './AllProfessionsContainer'

function ProfessionsBox ({ player, handleProfessionChange }) {

    const [myCharActive, setMyCharActive] = useState(true)


    const handleSelectionChange = () => {
        setMyCharActive(!myCharActive)
    }

    return ( 
        <BoxContainer className="professionBoxContainer">
            <ProfessionBoxOptions>
                <ProfBoxSelection 
                    title="My Character"
                    subTitle="All Professions"
                    myCharActive={myCharActive}
                    handleSelectionChange={handleSelectionChange}
                />
            </ProfessionBoxOptions>
            
            {myCharActive ? 
             <ProfessionsContainer 
                player={player} 
                setProfession={handleProfessionChange}
            /> 
            :
            <AllProfessionsContainer 
                setProfession={handleProfessionChange}
            />
        }

        </BoxContainer>
     );
}

export default ProfessionsBox ;