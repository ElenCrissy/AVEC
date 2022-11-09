import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const LoginHeaderButtonWrapper = styled.div`
  a{
    width: 100%;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 0.5rem;
    display: flex;
    &:visited{
      color: black;
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
                <FontAwesomeIcon icon={faRightToBracket} />
                Se connecter
            </a>
        </LoginHeaderButtonWrapper>
    )
}

export default LoginHeaderButton