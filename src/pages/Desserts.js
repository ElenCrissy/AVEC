import styled from "styled-components"
import usePlats from "../services/plats"
// import {getAliments} from "../api/apiAliments"
// import {useState, useEffect} from 'react'

const DessertsWrapper = styled.div`
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

const Desserts = () => {
    const plats = usePlats()
    let desserts = []
    plats.map((plat) => {
        if(plat.type === "dessert"){
            desserts.push(plat)
        }
    })
  
  return (
    <DessertsWrapper className="App">
      <CardWrapper className='card-wrapper'>
        {desserts.map((dessert) => (
          <Card href={`/plat/${dessert._id}`} className='card' key={dessert._id}>
            <PlatImage alt="nom-plat-photo" src={dessert.image}></PlatImage>
            <h3>{dessert.nom}</h3>
            <p>Prix : {dessert.prix} €</p>
            {dessert.aliments.map((aliment) => (
            <p key={aliment._id}>{aliment.nom}</p>
            ))}
          </Card>
        ))}
      </CardWrapper>
    </DessertsWrapper>
  );
}

export default Desserts

