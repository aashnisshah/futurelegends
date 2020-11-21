import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaTwitter } from "react-icons/fa"

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

const H2 = styled.h1`
  font-size: 48px;
  color: #fff;
  text-shadow: 0 0 24px #5ce1e6;
`
const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`

const LinkText = styled.span`
  color: #ffffff;
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
      <H2>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </H2>
    )
  }

  return (
    <GlobalWrapper data-is-root-path={isRootPath}>
      <ContentWrapper>
        <Content>
          <Header className="global-header">{header}</Header>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()} Future Legends Club | <FaTwitter />
            <Link to="https://twitter.com/TheFLClub">
              <LinkText>@TheFLClub</LinkText>
            </Link>
          </Footer>
        </Content>
      </ContentWrapper>
    </GlobalWrapper>
  )
}

export default Layout
