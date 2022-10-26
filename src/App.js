import './App.css';
// import data from './services';
import usePlats from './services/plats';

function App() {

  const plats = usePlats()
  console.log(plats)

  return (
    <div className="App">    
      <h1>AVEC</h1>
      <div className='aliments-wrapper'>
        {plats.map((plat) => (
          <div className='card' key={plat._id}>
            <h3>{plat.nom}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
