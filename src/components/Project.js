import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return(
    <React.Fragment>
      <div>
        <h2>Project</h2>
        {props.name} - {props.timeWorked}
        <br />
        {props.description}
        <br />
        {props.repo}
      </div>
    </React.Fragment>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  timeWorked: PropTypes.string,
  description: PropTypes.string,
  repo: PropTypes.string,
};

export default Project;