import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const GlobalWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100% !important;
`

const ContentWrapper = styled.div`
  margin: auto;
  width: 50%;
  height: 100% !important;
  justify-content: center;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  display: block;
`

const Header = styled.header`
  color: #5ce1e6;

  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
`

const H1 = styled.h1`
  font-size: 80px;
  color: #fff;
  text-shadow: 0 0 24px #5ce1e6;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <H1 className="main-heading">
        <Link to="/">{title}</Link>
      </H1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <GlobalWrapper data-is-root-path={isRootPath}>
      <ContentWrapper>
        <Content>
          <Header className="global-header">{header}</Header>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Future Legends Club</footer>
        </Content>
      </ContentWrapper>
    </GlobalWrapper>
  )
}

export default Layout
