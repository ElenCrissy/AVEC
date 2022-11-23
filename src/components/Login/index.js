import { useState } from "react";
import styled from "styled-components";

const LoginFormWrapper = styled.div`
  width : 70%;
  color : grey;
  border-radius : 20%;
  box-sizing : border-box;
  border-radius:5px;
  background-color:#f2f2f2;
  padding:20px;
  width: 100%;
  max-width: 440px;
  margin:20px auto;
  display: flex;
  flex-direction: column;
`
const LoginForm = styled.form`
  input[type=text], input[type=email]{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
  }
  label{margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }
  input[type=submit] {
    background-color: grey;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
  }
`

const LoginModal = () => {
  const [email, setEmail] = useState('')
  const [mdp, setMdp] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const userInput = {
        email : email,
        mdp : mdp
    }
    console.log(userInput)
    // requête post pour connexion de l'utilisateur
  }

  return(
      <LoginFormWrapper>
        <LoginForm method="post" onSubmit={submitForm} novalidate>
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email"
            onChange={(e) => setEmail(e.target.value)} 
            name="email"
            required/>

          <label for="mdp">Mot de passe</label>
          <input 
            type="text" 
            id="mdp" 
            onChange={(e) => setMdp(e.target.value)} 
            name="mdp"/>

          <input type="submit" value="Se connecter"/>
        </LoginForm>  
        <a href="/">Mot de passe oublié ?</a>   
        <a href="/">Créer un compte ?</a>        
      </LoginFormWrapper>
  )
}

export default LoginModal