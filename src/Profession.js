import React, { useState } from "react";
import { SkillTree, PlayerMods, ProfessionContainer, MasterLink, Master, BranchContainer, Branch, BranchLink, BranchSkillBoxContainer, Novice, NoviceLink } from './components'
import BranchBox from './BranchBox'
import SkillPointContainer from "./SkillPointContainer";
import BranchLinkBox from "./BranchLinkBox";
import PlayerSkills from './PlayerSkills'
import Mods from './Mods'
import { ALL_PROFESSIONS } from './CONSTANTS';

function Profession({handleProfessionChange, profession, handlePlayerChange, player, activeSkill, handleActiveSkill}) {

    const activeProfession = ALL_PROFESSIONS[profession]

  return (
        <ProfessionContainer>
            <SkillTree>
                <MasterLink>{activeProfession.master_links.map(item => <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}</MasterLink>
                <Master>
                    <BranchBox handleActiveSkill={handleActiveSkill} data={activeProfession.master} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>    
                </Master>
                <BranchContainer>
                <Branch>
                    <BranchLink>    
                        {activeProfession.branch_1.links.map(item =>      <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}
                    </BranchLink>
                        <BranchSkillBoxContainer>
                            {activeProfession.branch_1.skills.map(item => <BranchBox handleActiveSkill={handleActiveSkill} key={item} data={item} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>)} 
                        </BranchSkillBoxContainer>
                </Branch>
                <Branch>
                <BranchLink>{activeProfession.branch_2.links.map(item => <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}</BranchLink>
                    <BranchSkillBoxContainer>
                            {activeProfession.branch_2.skills.map(item => <BranchBox handleActiveSkill={handleActiveSkill} key={item} data={item} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>)} 
                        </BranchSkillBoxContainer>
                </Branch>
                <Branch>
                <BranchLink>{activeProfession.branch_3.links.map(item => <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}</BranchLink>
                <BranchSkillBoxContainer>
                            {activeProfession.branch_3.skills.map(item => <BranchBox handleActiveSkill={handleActiveSkill} key={item} data={item} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>)} 
                        </BranchSkillBoxContainer>
                </Branch>
                <Branch>
                <BranchLink>{activeProfession.branch_4.links.map(item => <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}</BranchLink>
                <BranchSkillBoxContainer>
                            {activeProfession.branch_4.skills.map(item => <BranchBox handleActiveSkill={handleActiveSkill} key={item} data={item} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>)} 
                        </BranchSkillBoxContainer>
                </Branch>
                </BranchContainer>
                <Novice>
                    <BranchBox handleActiveSkill={handleActiveSkill} data={activeProfession.novice} handlePlayerChange={handlePlayerChange} player={player}></BranchBox>
                </Novice>
                <NoviceLink>{activeProfession.novice_links.map(item => <BranchLinkBox key={item} data={item} setProfession={handleProfessionChange}></BranchLinkBox>)}</NoviceLink>
            </SkillTree>
            <PlayerMods>
                <Mods activeSkill={activeSkill}/>
                <PlayerSkills activeSkill={activeSkill}/>
            </PlayerMods>
            <SkillPointContainer player={player}/>
        </ProfessionContainer>
    )
}

export default Profession;