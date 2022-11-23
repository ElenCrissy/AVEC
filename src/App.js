import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Login from "./components/Login"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Entrees from "./pages/Entrees"
import Plats from "./pages/Plats"
import Desserts from "./pages/Desserts"


const App = () => {
  return(
    <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/entrees" element={<Entrees/>} />
          <Route path="/plats" element={<Plats/>} />
          <Route path="/desserts" element={<Desserts/>} />


          {/* <Route path="/signup" element={<Signup/>} /> */}
          {/* <Route path="/plat/:id" component={PlatPage} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer/>
    </div>
)
}

export default App;
