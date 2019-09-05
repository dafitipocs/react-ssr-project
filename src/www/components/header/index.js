import React from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header className="header">
        <div>
          <Navbar className="header-custom" light expand="md">
            <NavbarBrand href="/" className="item-menu">
              reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/" className="item-menu">
                    Contato
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/ndelbuque"
                    className="item-menu"
                  >
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="item-menu">
                    Blog
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Sobre</DropdownItem>
                    <DropdownItem>Post mais recente</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Todos os posts</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
