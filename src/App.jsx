import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./page/Login"
import Home from "./page/Home"
import Reset from "./page/Reset"
import Register from "./page/Register"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
