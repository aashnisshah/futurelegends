import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsLink = styled.span`
  font-size: 32px;
  color: #5ce1e6;
  font-family: "Noto Sans JP", sans-serif;
  justify-text: center;
  text-align: center;
  text-decoration: none;
  font-weight: strong;
`

const DisplayEventDate = styled.div`
  font-size: 24px;
  color: #fff;
`

const UpcomingEventsTitle = styled.h1`
  font-size: 40px;
  color: #fff;
`

const EventDescription = styled.section`
  color: #022c40;
`

const Events = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <UpcomingEventsTitle>Events</UpcomingEventsTitle>
        <p>No events found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <UpcomingEventsTitle>Events</UpcomingEventsTitle>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <EventsLink itemProp="headline">{title}</EventsLink>
                    </Link>
                  </h2>
                  <DisplayEventDate>{post.frontmatter.date}</DisplayEventDate>
                </header>
                <EventDescription>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </EventDescription>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Events

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
