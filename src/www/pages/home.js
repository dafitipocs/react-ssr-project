import React from "react";
import PropTypes from "prop-types";
import AppTemplate from "../components/templates/app";
import TemplateHome from "../components/templates/home";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <AppTemplate>
          <TemplateHome />
        </AppTemplate>
      </React.Fragment>
    );
  }
}

Home.propTypes = {};

export default Home;
