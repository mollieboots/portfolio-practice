import React from "react";
import Skill from "./Skill.js";
import PropTypes from "prop-types";

function SkillsList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.skillsList.map((skill) => (
        <Skill
          name={skill.name}
          experience={skill.experience}
          description={skill.description}
        />
      ))}
    </React.Fragment>
  )
}

SkillsList.propTypes = {
  SkillsList: PropTypes.array,
};

export default SkillsList;