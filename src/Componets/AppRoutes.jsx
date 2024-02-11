import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CatalogComponet from "./Pages/Catalog/CatalogComponet";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/catalog" element={<CatalogComponet/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;