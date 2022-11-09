import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

const App = () => {
  return(
    <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/plat/:id" component={PlatPage} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer/>
    </div>
)
}

export default App;
