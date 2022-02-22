import React from 'react';
import { SKILL_TITLE } from './CONSTANTS';

function BranchLinkBox ({setProfession, data}) {

    return ( 
        <>
            {data === "" ? "" : 
            
            <p onClick={() => setProfession(data)}>
                To: {SKILL_TITLE[data]}
            </p>}
        </>
     );
}

export default BranchLinkBox;