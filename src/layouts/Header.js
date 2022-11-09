import styled from "styled-components"
import logo from "../assets/logo.jpg"

const HeaderWrapper = styled.div`
    width :100%;
    height : 150px;
    background-color : black;
`

const Logo = styled.a`
  display: inline-block;
  font-weight: bold;
  color: white;
`

const NavWrapper = styled.nav`
  display: flex;
  background-color: lightgrey;
  width : 100%
  height : 100px
`

const NavElement = styled.div`
  width : 30%
  margin : 15px
`

const Header = () => {

    return(
        <HeaderWrapper>
            <Logo href="/">
                <img alt={"avec-logo"} src={logo}/>
            </Logo>
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