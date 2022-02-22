import React from 'react';

function ProfBoxSelection ({title, subTitle, myCharActive, handleSelectionChange}) {
    return ( 
        <div onClick={handleSelectionChange}>
            <p>
                {myCharActive ? title : subTitle}
            </p>
        </div>
     );
}

export default ProfBoxSelection ;