import styled from "styled-components"
// import usePlats from "../services/plats"
import {getAliments} from "../api/apiAliments"
import useState from 'react'

const HomeWrapper = styled.div`
  width:80%;
`

const CardWrapper = styled.div`
  width : 80%;
  display : flex;
  justify-content : center;
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
    // const plats = usePlats()
    const [ aliments, setAliments ] = useState([])
    console.log(getAliments())

  return (
    <HomeWrapper className="App">
      <CardWrapper className='card-wrapper'>
        {/* {plats.map((plat) => (
          <Card href={`/plat/${plat._id}`} className='card' key={plat._id}>
            <PlatImage alt="nom-plat-photo" src="../assets/burger.jpg"></PlatImage>
            Nom: <h3>{plat.nom}</h3>
            Prix : <h3>{plat.prix} €</h3>
            {plat.aliments.map((aliment) => (
            <p key={aliment._id}>{aliment.nom}</p>
            ))}
          </Card>
        ))} */}
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home

