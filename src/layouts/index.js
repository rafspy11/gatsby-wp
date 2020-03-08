import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact"

import Header from "../components/Header/index"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-5">{children}</main>
    </>
  )
}

export default MainLayout
