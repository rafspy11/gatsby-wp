import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
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

import './post.css';

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <section>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
