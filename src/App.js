import { Route, Routes } from "react-router-dom"
import ParentRoute from "./Route/ParentRoute";
import Home from "./Route/Home"
import General from "./Route/General"
import Nation from "./Route/Nation"
import World from "./Route/World"
import Business from "./Route/Business"
import Technology from "./Route/Technoloy"
import Entertainment from "./Route/Entertainment"
import Sports from "./Route/Sports"
import Science from "./Route/Science"
import Health from "./Route/Health"
import "./App.scss"
import Search from "./Route/Search";

const App = () => {
  return (
    <Routes>
      <Route element={<ParentRoute/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="category/general" element={<General/>}/>
        <Route path="category/nation" element={<Nation/>}/>
        <Route path="category/world" element={<World/>}/>
        <Route path="category/business" element={<Business/>}/>
        <Route path="category/technology" element={<Technology/>}/>
        <Route path="category/entertainment" element={<Entertainment/>}/>
        <Route path="category/sports" element={<Sports/>}/>
        <Route path="category/science" element={<Science/>}/>
        <Route path="category/health" element={<Health/>}/>
      </Route>
    </Routes>
  )
}



export default App;
