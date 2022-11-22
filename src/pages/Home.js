import styled from "styled-components"
import usePlats from "../services/plats"
// import {getAliments} from "../api/apiAliments"
// import {useState, useEffect} from 'react'

const HomeWrapper = styled.div`
  margin: 30px;
  justify-content: space-evenly;
`

const CardWrapper = styled.div`
  display : flex;
`

const Card = styled.a`
  display : block;
  color : inherit;
  text-decoration : inherit;
  width : 30%;
  border : 3px;
  margin : 10px;
  border : 1px
`

const PlatImage = styled.img`
    width : 100%;
    height : 100px;
`

const Home = () => {
    const plats = usePlats()
    

  return (
    <HomeWrapper className="App">
      <CardWrapper className='card-wrapper'>
        {plats.map((plat) => (
          <Card href={`/plat/${plat._id}`} className='card' key={plat._id}>
            <PlatImage alt="nom-plat-photo" src="./assets/burger.jpg"></PlatImage>
            <h3>{plat.nom}</h3>
            Prix : <h3>{plat.prix} €</h3>
            {plat.aliments.map((aliment) => (
            <p key={aliment._id}>{aliment.nom}</p>
            ))}
          </Card>
        ))}
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home

