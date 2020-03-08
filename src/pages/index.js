import React, { Component } from "react"
import { Link, graphql } from "gatsby"
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

import FeaturedMedia from '../components/FeaturedMedia/index'

class Homepage extends Component {
  render() {
    const data = this.props.data

    console.log(data);

    return (
      <>
        <section className="py-5">
          <MDBContainer>
            <MDBRow className="mb-5">
              <MDBCol>
                <h1>Najnowsze posty</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              {data.allWordpressPost.edges.map(({ node }) => (
                <MDBCol lg="4" md="6" className="mb-3" key={node.slug}>
                  <FeaturedMedia media={node} />
                  <Link to={node.slug}>
                    <h2>{node.title}</h2>
                  </Link>
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          featured_media {
            source_url
          }
        }
      }
    }
    allWordpressWpApiMenusMenus {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
