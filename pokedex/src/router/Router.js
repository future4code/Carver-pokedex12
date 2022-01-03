import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router