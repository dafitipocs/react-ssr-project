import React from "react";
import PropTypes from "prop-types";
import Banner from "../../banner";
import Jumbtron from "../../jumbotron";

class TemplateHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-banner">
          <Banner />
        </div>
        <Jumbtron />
      </React.Fragment>
    );
  }
}

TemplateHome.propTypes = {
  history: PropTypes.object,
  catalog: PropTypes.array,
  banners: PropTypes.array
};

export default TemplateHome;
