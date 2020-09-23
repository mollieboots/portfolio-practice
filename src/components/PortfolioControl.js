import React from "react";
import ProjectList from "./ProjectsList";
import PropTypes from "prop-types";
import { bioTest, getProjectList, getSkillsList } from "./testData";
import SkillsList from "./SkillsList";
import Bio from './Bio';
import { connect } from 'react-redux';

class PortfolioControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editing: false,
      projectList: getProjectList(),
      skillsList: getSkillsList(),
      bio: bioTest
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.editing) {
    } else {
      currentlyVisibleState = (
        <React.Fragment>
          <Bio bio={this.state.bio} />
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

PortfolioControl = connect()(PortfolioControl);

export default PortfolioControl;