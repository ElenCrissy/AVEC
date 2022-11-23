import styled from "styled-components"
import logo from "../assets/logo.jpg"
import Login from "../components/LoginHeaderButton"

const HeaderWrapper = styled.div`
  width : 100%;
`

const LogoAndConnection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width :100%;
  height : 150px;
  background-color : black
`

const Logo = styled.a`
  display: inline-block;
  width: 200px;
  margin-left: 20px;
  font-weight: bold;
  color: white;
  justify-content: center
`

const NavWrapper = styled.nav`
  display: flex;
  background-color: lightgrey;
  justify-content : space-evenly;
  padding: 30px 10px
`

const NavElement = styled.a`
  display : flex;
  justifi-content : center;
  font-weight: bold;
  text-decoration: none
  color: inherit;
  &:visited{
    color: black;
    text-decoration: none
  }
  &:hover{
    font-style: italic;
  }
`

const Header = () => {
  return(
      <HeaderWrapper>
          <LogoAndConnection>
            <Logo href="/">
                <img alt={"avec-logo"} src={logo}/>
            </Logo>
            <Login/>
          </LogoAndConnection>
          <NavWrapper>
              <NavElement href="/entrees">Entrées</NavElement>
              <NavElement href="/plats">Plats</NavElement>
              <NavElement href="/desserts">Desserts</NavElement>
              <NavElement href="/">Boissons</NavElement>
          </NavWrapper>
      </HeaderWrapper>
  )
}

export default Header;