import styled from "styled-components";

const RegisterFormWrapper = styled.div`
  width : 70%;
  color : grey;
  border-radius : 20%;
`
const RegisterForm = styled.form`
`

const RegisterModal = () => {
  return(
      <RegisterFormWrapper>
        <RegisterForm>
          <label>
            Identifiant :
            <input type="text" name="name" />
          </label>
          <label>
            Mot de passe :
            <input type="text" name="motdepasse" />
          </label>
          <label>
            Confirmez le mot de passe :
            <input type="text" name="motdepasse" />
          </label>
          <input type="submit" value="Submit" />
        </RegisterForm>      
      </RegisterFormWrapper>
  )
}

export default RegisterModal