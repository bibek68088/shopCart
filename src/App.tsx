import { Route, Routes } from "react-router-dom"
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import Pages from "./components/Pages"
import Shop from "./components/Shop"
import Blog from "./components/Blog"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/pages" element = {<Pages />}/>
        <Route path="/shop" element = {<Shop />}/>
        <Route path="/blog" element = {<Blog />}/>
        <Route path="/contact" element = {<Contact />}/>
      </Routes>
    </div>
  )
}

export default App