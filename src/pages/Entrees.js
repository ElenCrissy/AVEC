import styled from "styled-components"
import usePlats from "../services/plats"
// import {getAliments} from "../api/apiAliments"
// import {useState, useEffect} from 'react'

const EntreesWrapper = styled.div`
  margin: 30px;
  justify-content: space-evenly;
`

const CardWrapper = styled.div`
  display : flex;
  justify-content: space-evenly;
  height : 300px;
`

const Card = styled.div`
  display : block;
  color : inherit;
  text-decoration : inherit;
  width : 10%;
  border: 2px solid ;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  &:hover{
    background-color: lightgrey;
  }
`

const PlatImage = styled.img`
    width : 100%;
    height : 100px;
`

const Entrees = () => {
    const plats = usePlats()
    console.log("hello")
    let entrees = []
    plats.map((plat) => {
        if(plat.type === "entrée"){
            entrees.push(plat)
        }
    })
  
  return (
    <EntreesWrapper className="App">
      <CardWrapper className='card-wrapper'>
        {entrees.map((entree) => (
          <Card href={`/plat/${entree._id}`} className='card' key={entree._id}>
            <PlatImage alt="nom-plat-photo" src={entree.image}></PlatImage>
            <h3>{entree.nom}</h3>
            <p>Prix : {entree.prix} €</p>
            {entree.aliments.map((aliment) => (
            <p key={aliment._id}>{aliment.nom}</p>
            ))}
          </Card>
        ))}
      </CardWrapper>
    </EntreesWrapper>
  );
}

export default Entrees

