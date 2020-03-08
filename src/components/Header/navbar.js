import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact"
import { BrowserRouter as Router } from "react-router-dom"

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">
              <Link to="/" className="white-text">
                Navbar
              </Link>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              {this.props.items.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                item => {
                  if (item.wordpress_children != null) {
                    return (
                      <MDBNavItem>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">{item.title}</span>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            {item.wordpress_children.map(wordpress_child => {
                              return (
                                <Link
                                  key={wordpress_child.object_id}
                                  to={wordpress_child.object_slug}
                                  className="dropdown-item"
                                >
                                  {wordpress_child.title}
                                </Link>
                              )
                            })}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                    )
                  } else {
                    return (
                      <MDBNavItem active>
                        <Link
                          key={item.object_id}
                          to={item.object_slug}
                          className="white-text nav-link"
                        >
                          {item.title}
                        </Link>
                      </MDBNavItem>
                    )
                  }
                }
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    )
  }
}

export default NavbarPage
