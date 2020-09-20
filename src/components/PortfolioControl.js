import React from "react";
import ProjectList from "./ProjectsList";
import PropTypes from "prop-types";
import { getProjectList, getSkillsList } from "./testData";
import SkillsList from "./SkillsList";

class PortfolioControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editing: false,
      projectList: getProjectList(),
      skillsList: getSkillsList(),
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.editing) {
    } else {
      currentlyVisibleState = (
        <React.Fragment>
          <ProjectList projectList={this.state.projectList} />
          <SkillsList skillsList={this.state.skillsList} />
        </React.Fragment>
      );
    };
    return <React.Fragment>{currentlyVisibleState}</React.Fragment>
  }
}

PortfolioControl.propTypes = {
  projectList: PropTypes.array,
  skillsList: PropTypes.array,
};

export default PortfolioControl;