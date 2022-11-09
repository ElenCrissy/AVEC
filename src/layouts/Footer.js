import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-item : center;
  flex-direction : column;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  p{
    margin: 0;
    padding: 0;
  }
  background-color : black;
  color : white
`

const Footer = () => {
    return(
        <FooterWrapper>
            <p>3 rue du Breil</p>
            <p>35000 Rennes</p>
            <a href="/">contact@avec.fr</a>
            <p>Copyright 2022 AVEC</p>
        </FooterWrapper>
    )
}

export default Footer;