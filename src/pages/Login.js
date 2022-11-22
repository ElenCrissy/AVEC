import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const LoginHeaderButtonWrapper = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
  a{
    width: 100%;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 0.5rem;
    display: flex;
    &:visited{
      color: white;
    }
    .login-icon{
      height: 20px;
      margin-right : 20px;
    }
  }
  &:hover{
    color : white;
    text-decoration: none;
  }
`

// ouvrir modale, actualiser url
const LoginHeaderButton = () => {
    return(
        <LoginHeaderButtonWrapper>
            <a href="/login">
                <FontAwesomeIcon icon={faRightToBracket} class="login-icon"/>
                Se connecter
            </a>
            <a href="/signup">
                <FontAwesomeIcon icon={faUserPlus} class="login-icon"/>
                S'inscrire
            </a>
        </LoginHeaderButtonWrapper>
    )
}

export default LoginHeaderButton