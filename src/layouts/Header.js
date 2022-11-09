import styled from "styled-components"
import logo from "../assets/logo.jpg"
import Login from "../pages/Login"

const HeaderWrapper = styled.div`
    width :100%;
    height : 150px;
    background-color : black
`

const Logo = styled.a`
  display: inline-block;
  width: 200px;
  font-weight: bold;
  color: white;
  justify-content: center
`

const NavWrapper = styled.nav`
  display: flex;
  background-color: lightgrey;
  width : 100%;
  justify-content : center;
  padding: 30px 10px
`

const NavElement = styled.div`
  display : flex;
  justifi-content : center;
`

const Header = () => {
  return(
      <HeaderWrapper>
          <Logo href="/">
              <img alt={"avec-logo"} src={logo}/>
          </Logo>
          <Login/>
          <a href="/signup">S'inscrire</a>
          <NavWrapper>
              <NavElement>Entrées à partager</NavElement>
              <NavElement>Offre du midi</NavElement>
              <NavElement>Burger</NavElement>
              <NavElement>Barbecue</NavElement>
              <NavElement>Salades</NavElement>
              <NavElement>Accompagnements</NavElement>
              <NavElement>Sauce</NavElement>
              <NavElement>Desserts</NavElement>
              <NavElement>Boissons</NavElement>
          </NavWrapper>
      </HeaderWrapper>
  )
}

export default Header;