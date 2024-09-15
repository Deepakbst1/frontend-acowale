import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../App.scss"

const ParentRoute = () => {
    return (
    <div className="parent-route">
        <Header/>
        <Outlet/>
    </div>)
}

export default ParentRoute;