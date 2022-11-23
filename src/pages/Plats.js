import styled from "styled-components"
import usePlats from "../services/plats"
// import {getAliments} from "../api/apiAliments"
// import {useState, useEffect} from 'react'

const PlatsWrapper = styled.div`
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

const Plats = () => {
    const allPlats = usePlats()
    let plats = []
    allPlats.map((plat) =>{
        if(plat.type === "plat"){
            plats.push(plat)
        }
    })
  
  return (
    <PlatsWrapper className="App">
      <CardWrapper className='card-wrapper'>
        {plats.map((plat) => (
          <Card href={`/plat/${plat._id}`} className='card' key={plat._id}>
            <PlatImage alt="nom-plat-photo" src={plat.image}></PlatImage>
            <h3>{plat.nom}</h3>
            <p>Prix : {plat.prix} €</p>
            {plat.aliments.map((aliment) => (
            <p key={aliment._id}>{aliment.nom}</p>
            ))}
          </Card>
        ))}
      </CardWrapper>
    </PlatsWrapper>
  );
}

export default Plats

