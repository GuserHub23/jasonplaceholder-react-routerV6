import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="container__app">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
