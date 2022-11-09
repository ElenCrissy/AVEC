import styled from "styled-components";

const LoginFormWrapper = styled.div`
  width : 70%;
  color : grey;
  border-radius : 20%;
`
const LoginForm = styled.form`
`

const LoginModal = () => {
  return(
      <LoginFormWrapper>
        <LoginForm>
          <label>
            Identifiant :
            <input type="text" name="name" />
          </label>
          <label>
            Mot de passe :
            <input type="text" name="motdepasse" />
          </label>
          <input type="submit" value="Submit" />
        </LoginForm>  
        <a href="/">Mot de passe oublié ?</a>   
        <a href="/">Créer un compte ?</a>        
      </LoginFormWrapper>
  )
}

export default LoginModal