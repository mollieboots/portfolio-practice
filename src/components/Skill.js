import React from "react";
import PropTypes from "prop-types";

function Skill(props) {
  return (
    <React.Fragment>
      <div>
        <h2>Skills</h2>
        {props.name} - {props.experience}
        <br />
        {props.description}
        <br />
      </div>
    </React.Fragment>
  ); 
};

Skill.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.string,
  description: PropTypes.string,
  example: PropTypes.string,
};

export default Skill;