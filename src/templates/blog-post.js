import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Header = styled.header`
  padding-bottom: 24px;
`

const EventsTitle = styled.h1`
  font-size: 36px;
  color: #022c40;
  font-family: "Noto Sans JP", sans-serif;
  text-decoration: none;
  font-weight: strong;
`

const Hr = styled.hr`
  color: #022c40;
`

const DisplayEventDate = styled.div`
  font-size: 12px;
  color: #fff;
`

const EventDescription = styled.section`
  color: #efefef;
  font-size: 16px;
`

const JoinButton = styled.a`
  background-color: #022c40;
  padding: 18px;
  border-radius: 24px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Header>
          <EventsTitle itemProp="headline">
            {post.frontmatter.title}
          </EventsTitle>
          <Hr />
          <DisplayEventDate>
            {post.frontmatter.date} at {post.frontmatter.time}
          </DisplayEventDate>
        </Header>
        <EventDescription
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <JoinButton href={post.frontmatter.registrationLink}>
          Register Now!
        </JoinButton>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        time
        description
        registrationLink
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
