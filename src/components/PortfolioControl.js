import React from "react";
import ProjectList from "./ProjectsList";
import PropTypes from "prop-types";
import { getProjectList } from "./testData";

class PortfolioControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editing: false,
      projectList: getProjectList(),
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.editing) {
    } else {
      currentlyVisibleState = (
        <ProjectList projectList={this.state.projectList} />
      );
    }
    return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
  }
}

PortfolioControl.propTypes = {
  projectList: PropTypes.array,
};

export default PortfolioControl;
