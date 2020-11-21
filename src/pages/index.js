import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Subtitle = styled.div`
  font-size: 36px;
  color: #5ce1e6;
  font-family: "Noto Sans JP", sans-serif;
  justify-text: center;
  text-align: center;
`

const SubText = styled.p`
  font-size: 36px;
  color: #5ce1e6;
  font-family: "Noto Sans JP", sans-serif;
  justify-text: center;
  text-align: center;
  text-decoration: none;
`

const EventsLink = styled.a`
  font-size: 36px;
  color: #5ce1e6;
  font-family: "Noto Sans JP", sans-serif;
  justify-text: center;
  text-align: center;
  text-decoration: none;
  font-style: italic;
  font-weight: strong;
`

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Future Legends Club" />
      {/* <Subtitle>Founder Community</Subtitle> */}
      <SubText>
        Check out our <EventsLink href="/events">events</EventsLink>
      </SubText>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
