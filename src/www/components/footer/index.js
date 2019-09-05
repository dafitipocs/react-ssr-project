import React from "react";
import PropTypes from "prop-types";

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">footer</footer>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {};

export default Footer;
