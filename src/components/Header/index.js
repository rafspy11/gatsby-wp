import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Navbar from "./navbar"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            name
            items {
              object_id
              title
              url
              object_slug
              wordpress_children {
                object_id
                title
                url
                object_slug
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar items={data} />
    </>
  )
}

export default Header
