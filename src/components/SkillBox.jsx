import React from "react";
import { SKILL_TITLE } from "../data";
import { SkillBoxContainer } from "../styled-components";

function SkillBox({
  data,
  isActive,
  handleActiveSkillChange,
  handleSkillChange,
}) {
  const handleSkillChangeClick = (skill) => {
    if (isActive) {
      handleSkillChange({
        action: "remove",
        data: skill,
      });
    } else {
      handleSkillChange({
        action: "add",
        data: skill,
      });
    }
  };

  return (
    <SkillBoxContainer
      active={isActive}
      onMouseEnter={() => handleActiveSkillChange(data)}
      onClick={() => handleSkillChangeClick(data)}
    >
      <p>{SKILL_TITLE[data]}</p>
    </SkillBoxContainer>
  );
}

export default SkillBox;
