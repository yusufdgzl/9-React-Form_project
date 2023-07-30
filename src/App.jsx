import SiteRoutes from "./SiteRoutes"
import Navbar from "./components/navbar"
import "./style.css"

function App() {

  return (
    <>
    <Navbar/>
      <div className="container">
        <SiteRoutes/>
      </div>
    </>
  )
}

export default App
