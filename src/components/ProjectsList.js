import React from "react";
import Project from "./Project.js";
import PropTypes from "prop-types";

function ProjectList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.projectList.map((project) => (
        <Project
          name={project.name}
          timeWorked={project.timeWorked}
          description={project.description}
          repo={project.repo}
        />
      ))}
    </React.Fragment>
  )
}

ProjectList.propTypes = {
  projectList: PropTypes.array,
};

export default ProjectList;