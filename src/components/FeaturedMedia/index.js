import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const FeaturedMedia = ({ media }) => {
  if (media.featured_media != null) {
    return (
      <Link to={media.slug}>
        <img src={media.featured_media.source_url} />
      </Link>
    )
  } else {
    return null
  }
}

export default FeaturedMedia
