import Navbar from "../src/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import './App.css'


function App() {

  return (
    <div className="App">

      <Navbar/>

      <div className="conteiner">
        <Outlet />
      </div>

    </div>
  )
}

export default App
